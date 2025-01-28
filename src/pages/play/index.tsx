import dedent from "dedent";
import { useEffect, useRef, useState } from "react";
import CodeEditor from "../../editor";
import OutputScreen from "./output";
import TargetScreen from "./target";
import TopBar from "./top-bar";
import { useGetTargetByIdQuery } from "../../api";
import { useParams } from "react-router";
import {
  compareImages,
  getScreenshotFromIframe,
  loadImage,
} from "../../utils/image";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";
import { storeMatchData } from "../../slice/matchSlice";
import { useGetMatchDataQuery } from "../../api/match";

const PlayGround = () => {

  
  const { targetId } = useParams();

  const { user } = useSelector((state: RootState) => state.auth);
  const { data: target } = useGetTargetByIdQuery(targetId ?? "");
  const dispatch = useAppDispatch();

  const { data } = useGetMatchDataQuery(
    { userId: user?.uid ?? "", targetId: target?.id ?? "" },
    { skip: !user?.uid || !target?.id }, // Skip if no userId or targetId is provided
  );

  const [similarityPercentange, setSimilarityPercentange] = useState<number>(
    data?.percentageMatched ?? 0,
  );
  const [score, setScore] = useState<number>(data?.maxScore ?? 0);

  useEffect( () => {console.log(score)} , [score]); 


  const [code, setCode] = useState(
    dedent`<div></div>
    <style>
      div {
        width: 100px;
        height: 100px;
        background: #dd6b4d;
      }
    </style>`,
  );

  const iframeRef = useRef<HTMLIFrameElement>(null); // Ref for iframe

  const compareImg = async () => {
    const screenshotBase64 = await getScreenshotFromIframe(iframeRef.current);

    if (!screenshotBase64) {
      console.error("Failed to capture iframe screenshot.");
      return;
    }

    const targetCanvas = await loadImage(target?.image ?? "");
    const targetBase64 = targetCanvas.toDataURL("image/png");

    const getPercentage = await compareImages(screenshotBase64, targetBase64);
    const calculatedSimilarity = Number((100 - getPercentage).toFixed(2));

    // Update state with the new similarity percentage and score
    setSimilarityPercentange(calculatedSimilarity);

    
    // Calculate score based on the new similarity
    const calculatedScore = Number((calculatedSimilarity * 5).toFixed(2));
    setScore(calculatedScore);
    dispatch(
      storeMatchData({
        userId: user?.uid ?? "",
        targetId: (target?.id as string) ?? "",
        score,
        percentageMatched: similarityPercentange,
      }),
    );
  };

  return (
    <div className="bg-slate-950 w-full min-h-screen text-white font-['Jetbrains Mono'] overflow-hidden">
      <TopBar onSubmit={compareImg} />
      <div className="grid grid-cols-3">
        <div className="border-2 border-white ">
          <h1 className="bg-slate-900 py-1 px-2 font-bold uppercase">
            Code Editor
          </h1>
          <CodeEditor onValueChange={setCode} code={code} />
        </div>

        {/* Output Section */}
        <div className="border-2 border-white font-bold">
          <OutputScreen
            percentangeMatched={`${similarityPercentange}`}
            score={`${score}`}
            ref={iframeRef}
            code={code}
          />
        </div>

        {/* Target Image Section */}
        <div className="border-2 border-white font-bold">
          <TargetScreen
            imageUrl={target?.image ?? ""}
            colors={target?.colors ?? []}
          />
        </div>
      </div>
    </div>
  );
};

export default PlayGround;
