import { subjects } from "@/lib/data";
import * as std6Data from "@/data/std6";
import * as std7Data from "@/data/std7";
import * as std8Data from "@/data/std8";
import * as std9Data from "@/data/std9";
import * as padhtishastraData from "@/data/padhtishastra";
import * as grammarData from "@/data/grammar";
import TheoryContent from "./TheoryContent";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { TheoryData } from "@/types/theory";

const std6Theory: Record<string, TheoryData> = {
  ch1: std6Data.std6_ch1_theory,
  ch2: std6Data.std6_ch2_theory,
  ch3: std6Data.std6_ch3_theory,
  ch4: std6Data.std6_ch4_theory,
  ch5: std6Data.std6_ch5_theory,
  ch6: std6Data.std6_ch6_theory,
  ch7: std6Data.std6_ch7_theory,
  ch8: std6Data.std6_ch8_theory,
  ch9: std6Data.std6_ch9_theory,
  ch10: std6Data.std6_ch10_theory,
  ch11: std6Data.std6_ch11_theory,
  ch12: std6Data.std6_ch12_theory,
  ch13: std6Data.std6_ch13_theory,
  ch14: std6Data.std6_ch14_theory,
  ch15: std6Data.std6_ch15_theory,
};

const std7Theory: Record<string, TheoryData> = {
  ch1: std7Data.std7_ch1_theory,
  ch2: std7Data.std7_ch2_theory,
  ch3: std7Data.std7_ch3_theory,
  ch4: std7Data.std7_ch4_theory,
  ch5: std7Data.std7_ch5_theory,
  ch6: std7Data.std7_ch6_theory,
  ch7: std7Data.std7_ch7_theory,
  ch8: std7Data.std7_ch8_theory,
  ch9: std7Data.std7_ch9_theory,
  ch10: std7Data.std7_ch10_theory,
  ch11: std7Data.std7_ch11_theory,
  ch12: std7Data.std7_ch12_theory,
  ch13: std7Data.std7_ch13_theory,
  ch14: std7Data.std7_ch14_theory,
  ch15: std7Data.std7_ch15_theory,
  ch16: std7Data.std7_ch16_theory,
  ch17: std7Data.std7_ch17_theory,
  ch18: std7Data.std7_ch18_theory,
};

const std8Theory: Record<string, TheoryData> = {
  ch1: std8Data.std8_ch1_theory,
  ch2: std8Data.std8_ch2_theory,
  ch3: std8Data.std8_ch3_theory,
  ch4: std8Data.std8_ch4_theory,
  ch5: std8Data.std8_ch5_theory,
  ch6: std8Data.std8_ch6_theory,
  ch7: std8Data.std8_ch7_theory,
  ch8: std8Data.std8_ch8_theory,
  ch9: std8Data.std8_ch9_theory,
  ch10: std8Data.std8_ch10_theory,
  ch11: std8Data.std8_ch11_theory,
  ch12: std8Data.std8_ch12_theory,
  ch13: std8Data.std8_ch13_theory,
  ch14: std8Data.std8_ch14_theory,
  ch15: std8Data.std8_ch15_theory,
  ch16: std8Data.std8_ch16_theory,
  ch17: std8Data.std8_ch17_theory,
  ch18: std8Data.std8_ch18_theory,
};

const std9Theory: Record<string, TheoryData> = {
  ch1: std9Data.std9_ch1_theory,
  ch2: std9Data.std9_ch2_theory,
  ch3: std9Data.std9_ch3_theory,
  ch4: std9Data.std9_ch4_theory,
  ch5: std9Data.std9_ch5_theory,
  ch6: std9Data.std9_ch6_theory,
  ch7: std9Data.std9_ch7_theory,
  ch8: std9Data.std9_ch8_theory,
  ch9: std9Data.std9_ch9_theory,
  ch10: std9Data.std9_ch10_theory,
  ch11: std9Data.std9_ch11_theory,
  ch12: std9Data.std9_ch12_theory,
  ch13: std9Data.std9_ch13_theory,
  ch14: std9Data.std9_ch14_theory,
  ch15: std9Data.std9_ch15_theory,
  ch16: std9Data.std9_ch16_theory,
  ch17: std9Data.std9_ch17_theory,
  ch18: std9Data.std9_ch18_theory,
  ch19: std9Data.std9_ch19_theory,
  ch20: std9Data.std9_ch20_theory,
  ch21: std9Data.std9_ch21_theory,
  ch22: std9Data.std9_ch22_theory,
  ch23: std9Data.std9_ch23_theory,
  ch24: std9Data.std9_ch24_theory,
};

const padhtishastraTheory: Record<string, TheoryData> = {
  ch1: padhtishastraData.padhtishastra_ch1_theory,
  ch2: padhtishastraData.padhtishastra_ch2_theory,
  ch3: padhtishastraData.padhtishastra_ch3_theory,
  ch4: padhtishastraData.padhtishastra_ch4_theory,
  ch5: padhtishastraData.padhtishastra_ch5_theory,
  ch6: padhtishastraData.padhtishastra_ch6_theory,
  ch7: padhtishastraData.padhtishastra_ch7_theory,
  ch8: padhtishastraData.padhtishastra_ch8_theory,
  ch9: padhtishastraData.padhtishastra_ch9_theory,
};

const grammarTheory: Record<string, TheoryData> = {
  ch1: grammarData.grammar_ch1_theory,
  ch2: grammarData.grammar_ch2_theory,
  ch3: grammarData.grammar_ch3_theory,
  ch4: grammarData.grammar_ch4_theory,
  ch5: grammarData.grammar_ch5_theory,
  ch6: grammarData.grammar_ch6_theory,
  ch7: grammarData.grammar_ch7_theory,
  ch8: grammarData.grammar_ch8_theory,
  ch9: grammarData.grammar_ch9_theory,
  ch10: grammarData.grammar_ch10_theory,
  ch11: grammarData.grammar_ch11_theory,
  ch12: grammarData.grammar_ch12_theory,
  ch13: grammarData.grammar_ch13_theory,
  ch14: grammarData.grammar_ch14_theory,
  ch15: grammarData.grammar_ch15_theory,
  ch16: grammarData.grammar_ch16_theory,
};

export default async function TheoryPage(props: { params: Promise<{ subjectId: string, topicId: string }> }) {
  const { subjectId, topicId } = await props.params;
  const subject = subjects.find(s => s.id === subjectId);
  const topic = subject?.topics.find(t => t.id === topicId);

  const theoryData = 
    subjectId === 'std6' ? std6Theory[topicId] : 
    subjectId === 'std7' ? std7Theory[topicId] : 
    subjectId === 'std8' ? std8Theory[topicId] : 
    subjectId === 'std9' ? std9Theory[topicId] : 
    subjectId === 'padhtishastra' ? padhtishastraTheory[topicId] : 
    subjectId === 'grammar' ? grammarTheory[topicId] : null;

  if (!subject || !topic || !theoryData) {
    return (
      <main className="flex min-h-screen items-center justify-center p-4">
        <div className="text-center">
          <p className="text-2xl mb-4">😕</p>
          <p className="text-muted-foreground">इस अध्याय के लिए अभी थ्योरी उपलब्ध नहीं है।</p>
          <Link href={`/chapter/${subjectId}`}>
            <Button variant="outline" className="mt-4">
              ← वापस जाएं
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <TheoryContent 
      subject={subject} 
      topic={topic}
      theory={theoryData} 
      subjectId={subjectId} 
      topicId={topicId} 
    />
  );
}
