import { subjects } from "@/lib/data";
import * as std6Data from "@/data/std6";
import * as std7Data from "@/data/std7";
import * as std8Data from "@/data/std8";
import * as std9Data from "@/data/std9";
import * as padhtishastraData from "@/data/padhtishastra";
import * as grammarData from "@/data/grammar";
import TestContent from "./TestContent";
import Link from "next/link";

import type { TestData } from "@/types/test";

const std6Tests: Record<string, TestData> = {
  ch1: std6Data.std6_ch1_test,
  ch2: std6Data.std6_ch2_test,
  ch3: std6Data.std6_ch3_test,
  ch4: std6Data.std6_ch4_test,
  ch5: std6Data.std6_ch5_test,
  ch6: std6Data.std6_ch6_test,
  ch7: std6Data.std6_ch7_test,
  ch8: std6Data.std6_ch8_test,
  ch9: std6Data.std6_ch9_test,
  ch10: std6Data.std6_ch10_test,
  ch11: std6Data.std6_ch11_test,
  ch12: std6Data.std6_ch12_test,
  ch13: std6Data.std6_ch13_test,
  ch14: std6Data.std6_ch14_test,
  ch15: std6Data.std6_ch15_test,
  megatest: std6Data.std6_megatest_test,
};

const std7Tests: Record<string, TestData> = {
  ch1: std7Data.std7_ch1_test,
  ch2: std7Data.std7_ch2_test,
  ch3: std7Data.std7_ch3_test,
  ch4: std7Data.std7_ch4_test,
  ch5: std7Data.std7_ch5_test,
  ch6: std7Data.std7_ch6_test,
  ch7: std7Data.std7_ch7_test,
  ch8: std7Data.std7_ch8_test,
  ch9: std7Data.std7_ch9_test,
  ch10: std7Data.std7_ch10_test,
  ch11: std7Data.std7_ch11_test,
  ch12: std7Data.std7_ch12_test,
  ch13: std7Data.std7_ch13_test,
  ch14: std7Data.std7_ch14_test,
  ch15: std7Data.std7_ch15_test,
  ch16: std7Data.std7_ch16_test,
  ch17: std7Data.std7_ch17_test,
  ch18: std7Data.std7_ch18_test,
  megatest: std7Data.std7_megatest_test,
};

const std8Tests: Record<string, TestData> = {
  ch1: std8Data.std8_ch1_test,
  ch2: std8Data.std8_ch2_test,
  ch3: std8Data.std8_ch3_test,
  ch4: std8Data.std8_ch4_test,
  ch5: std8Data.std8_ch5_test,
  ch6: std8Data.std8_ch6_test,
  ch7: std8Data.std8_ch7_test,
  ch8: std8Data.std8_ch8_test,
  ch9: std8Data.std8_ch9_test,
  ch10: std8Data.std8_ch10_test,
  ch11: std8Data.std8_ch11_test,
  ch12: std8Data.std8_ch12_test,
  ch13: std8Data.std8_ch13_test,
  ch14: std8Data.std8_ch14_test,
  ch15: std8Data.std8_ch15_test,
  ch16: std8Data.std8_ch16_test,
  ch17: std8Data.std8_ch17_test,
  ch18: std8Data.std8_ch18_test,
  megatest: std8Data.std8_megatest_test,
};

const std9Tests: Record<string, TestData> = {
  ch1: std9Data.std9_ch1_test,
  ch2: std9Data.std9_ch2_test,
  ch3: std9Data.std9_ch3_test,
  ch4: std9Data.std9_ch4_test,
  ch5: std9Data.std9_ch5_test,
  ch6: std9Data.std9_ch6_test,
  ch7: std9Data.std9_ch7_test,
  ch8: std9Data.std9_ch8_test,
  ch9: std9Data.std9_ch9_test,
  ch10: std9Data.std9_ch10_test,
  ch11: std9Data.std9_ch11_test,
  ch12: std9Data.std9_ch12_test,
  ch13: std9Data.std9_ch13_test,
  ch14: std9Data.std9_ch14_test,
  ch15: std9Data.std9_ch15_test,
  ch16: std9Data.std9_ch16_test,
  ch17: std9Data.std9_ch17_test,
  ch18: std9Data.std9_ch18_test,
  ch19: std9Data.std9_ch19_test,
  ch20: std9Data.std9_ch20_test,
  ch21: std9Data.std9_ch21_test,
  ch22: std9Data.std9_ch22_test,
  ch23: std9Data.std9_ch23_test,
  ch24: std9Data.std9_ch24_test,
  megatest: std9Data.std9_megatest_test,
};

const padhtishastraTests: Record<string, TestData> = {
  ch1: padhtishastraData.padhtishastra_ch1_test,
  ch2: padhtishastraData.padhtishastra_ch2_test,
  ch3: padhtishastraData.padhtishastra_ch3_test,
  ch4: padhtishastraData.padhtishastra_ch4_test,
  ch5: padhtishastraData.padhtishastra_ch5_test,
  ch6: padhtishastraData.padhtishastra_ch6_test,
  ch7: padhtishastraData.padhtishastra_ch7_test,
  ch8: padhtishastraData.padhtishastra_ch8_test,
  ch9: padhtishastraData.padhtishastra_ch9_test,
};

const grammarTests: Record<string, TestData> = {
  ch1: grammarData.grammar_ch1_test,
  ch2: grammarData.grammar_ch2_test,
  ch3: grammarData.grammar_ch3_test,
  ch4: grammarData.grammar_ch4_test,
  ch5: grammarData.grammar_ch5_test,
  ch6: grammarData.grammar_ch6_test,
  ch7: grammarData.grammar_ch7_test,
  ch8: grammarData.grammar_ch8_test,
  ch9: grammarData.grammar_ch9_test,
  ch10: grammarData.grammar_ch10_test,
  ch11: grammarData.grammar_ch11_test,
  ch12: grammarData.grammar_ch12_test,
  ch13: grammarData.grammar_ch13_test,
  ch14: grammarData.grammar_ch14_test,
  ch15: grammarData.grammar_ch15_test,
  ch16: grammarData.grammar_ch16_test,
};

export default async function TestPage(props: { params: Promise<{ subjectId: string, topicId: string }> }) {
  const { subjectId, topicId } = await props.params;
  const subject = subjects.find(s => s.id === subjectId);
  const topic = subject?.topics.find(t => t.id === topicId);

  const testData = 
    subjectId === 'std6' ? std6Tests[topicId] : 
    subjectId === 'std7' ? std7Tests[topicId] : 
    subjectId === 'std8' ? std8Tests[topicId] : 
    subjectId === 'std9' ? std9Tests[topicId] : 
    subjectId === 'padhtishastra' ? padhtishastraTests[topicId] : 
    subjectId === 'grammar' ? grammarTests[topicId] : null;

  if (!subject || !topic || !testData) {
    return (
      <main className="flex min-h-screen items-center justify-center p-4">
        <div className="text-center">
          <p className="text-2xl mb-4">😕</p>
          <p className="text-muted-foreground">इस अध्याय के लिए अभी टेस्ट उपलब्ध नहीं है।</p>
          <Link href={`/chapter/${subjectId}`}>
            <button className="mt-4 rounded-xl border border-zinc-200 dark:border-zinc-700 px-4 py-2 text-sm font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
              ← वापस जाएं
            </button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <TestContent 
      subject={subject} 
      test={testData} 
      subjectId={subjectId} 
      topicId={topicId} 
    />
  );
}
