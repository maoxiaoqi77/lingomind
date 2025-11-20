import { NextResponse } from "next/server";
import OpenAI from "openai";

const MOCK_PAYLOAD = {
  word: "serendipity",
  phonetic: "/ˌser.ənˈdɪp.ɪ.ti/",
  meaning: "A fortunate discovery or pleasant surprise found by chance.",
  dailyUsages: [
    "Finding my old friend at the café yesterday was pure serendipity.",
    "She stumbled upon the perfect apartment through serendipity, not planning.",
    "Serendipity led them to the hidden bookstore on a rainy afternoon.",
  ],
  exampleSentence: "It was serendipity that we met during that delayed flight.",
  imageKeywords: ["happy accident", "discovery", "unexpected joy"],
};

type AnalyzeWordRequest = {
  word?: string;
  targetLang?: string;
  translateTo?: string;
};

type AnalyzeWordResponse = typeof MOCK_PAYLOAD;

export async function POST(request: Request) {
  const body: AnalyzeWordRequest = await request.json().catch(() => ({}));
  const { word, targetLang, translateTo } = body;

  if (!word || !targetLang || !translateTo) {
    return NextResponse.json(
      { error: "Missing required fields: word, targetLang, translateTo" },
      { status: 400 }
    );
  }

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const prompt = `You are a friendly vocabulary tutor. Given a word, provide:
- phonetic spelling
- a concise meaning in the target language
- 2-3 daily usage sentences in the target language
- one concise example sentence
- 3-5 concise image keywords describing what to visualize for this word
Return only valid JSON with keys: word, phonetic, meaning, dailyUsages (array), exampleSentence, imageKeywords (array).

Word: ${word}
Target language: ${targetLang}
Translate to: ${translateTo}`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        { role: "system", content: "You produce concise JSON for vocabulary help." },
        { role: "user", content: prompt },
      ],
      response_format: { type: "json_object" },
      temperature: 0.7,
    });

    const content = completion.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error("No content returned from model");
    }

    const parsed = JSON.parse(content) as AnalyzeWordResponse;

    return NextResponse.json(parsed);
  } catch (error) {
    console.error("Analyze word error", error);
    return NextResponse.json({ ...MOCK_PAYLOAD, word });
  }
}
