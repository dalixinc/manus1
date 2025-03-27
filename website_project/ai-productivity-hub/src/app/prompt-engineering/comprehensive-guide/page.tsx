"use client"

import Link from "next/link"
import { ArrowRight, BookOpen, CheckCircle, Copy, FileText, Lightbulb } from "lucide-react"

export default function PromptEngineeringGuide() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="py-12 md:py-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight neon-text">
            The Ultimate Guide to Prompt Engineering
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Master the art of crafting effective prompts to get exceptional results from AI systems
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8 max-w-4xl mx-auto">
        <div className="rounded-lg border bg-card p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Table of Contents</h2>
          <ul className="space-y-2">
            <li>
              <a href="#fundamentals" className="text-primary hover:underline">1. Fundamentals of Prompt Engineering</a>
            </li>
            <li>
              <a href="#anatomy" className="text-primary hover:underline">2. Anatomy of an Effective Prompt</a>
            </li>
            <li>
              <a href="#techniques" className="text-primary hover:underline">3. Advanced Techniques</a>
            </li>
            <li>
              <a href="#examples" className="text-primary hover:underline">4. Real-World Examples</a>
            </li>
            <li>
              <a href="#troubleshooting" className="text-primary hover:underline">5. Troubleshooting & Refinement</a>
            </li>
          </ul>
        </div>
      </section>

      {/* Fundamentals Section */}
      <section id="fundamentals" className="py-8 max-w-4xl mx-auto scroll-mt-20">
        <h2 className="text-3xl font-bold mb-6">1. Fundamentals of Prompt Engineering</h2>
        
        <div className="space-y-6">
          <p className="text-lg">
            Prompt engineering is the practice of crafting input text to effectively communicate with AI language models. 
            It's about finding the right words, structure, and context to guide the AI toward producing the most helpful, 
            accurate, and relevant responses for your specific needs.
          </p>
          
          <h3 className="text-2xl font-semibold mt-8 mb-4">Why Prompt Engineering Matters</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-lg border p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                <CheckCircle className="h-5 w-5 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Quality of Output</h4>
              <p className="text-muted-foreground">
                Well-crafted prompts lead to higher quality, more accurate, and more useful responses.
              </p>
            </div>
            
            <div className="rounded-lg border p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                <CheckCircle className="h-5 w-5 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Efficiency</h4>
              <p className="text-muted-foreground">
                Good prompts reduce the need for multiple iterations, saving time and computational resources.
              </p>
            </div>
            
            <div className="rounded-lg border p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                <CheckCircle className="h-5 w-5 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Consistency</h4>
              <p className="text-muted-foreground">
                Structured prompting leads to more consistent and predictable results across multiple interactions.
              </p>
            </div>
            
            <div className="rounded-lg border p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                <CheckCircle className="h-5 w-5 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Control</h4>
              <p className="text-muted-foreground">
                Effective prompts give you greater control over the AI's behavior, tone, and output format.
              </p>
            </div>
          </div>
          
          <h3 className="text-2xl font-semibold mt-8 mb-4">The Prompt Engineering Mindset</h3>
          
          <p className="text-lg mb-4">
            Successful prompt engineering requires thinking about:
          </p>
          
          <ul className="list-disc pl-6 space-y-2 text-lg mb-6">
            <li><strong>Clarity:</strong> How can I make my request unambiguous?</li>
            <li><strong>Context:</strong> What background information does the AI need?</li>
            <li><strong>Constraints:</strong> What limitations or requirements should I specify?</li>
            <li><strong>Guidance:</strong> How can I steer the AI toward my desired outcome?</li>
            <li><strong>Iteration:</strong> How can I refine my prompt based on the responses I receive?</li>
          </ul>
        </div>
      </section>

      {/* Anatomy Section */}
      <section id="anatomy" className="py-8 max-w-4xl mx-auto scroll-mt-20">
        <h2 className="text-3xl font-bold mb-6">2. Anatomy of an Effective Prompt</h2>
        
        <div className="space-y-6">
          <p className="text-lg mb-6">
            An effective prompt typically contains several key components, though not all are necessary for every interaction.
          </p>
          
          <div className="rounded-lg border bg-card p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">The Components of a Great Prompt</h3>
            
            <div className="space-y-4">
              <div className="p-4 border-l-4 border-[hsl(var(--card-prompts-border))]">
                <h4 className="font-semibold">1. Role or Context Setting</h4>
                <p className="text-muted-foreground">
                  "Act as a financial advisor with expertise in retirement planning."
                </p>
              </div>
              
              <div className="p-4 border-l-4 border-[hsl(var(--card-prompts-border))]">
                <h4 className="font-semibold">2. Task Description</h4>
                <p className="text-muted-foreground">
                  "I need help creating a 5-year savings plan to prepare for retirement."
                </p>
              </div>
              
              <div className="p-4 border-l-4 border-[hsl(var(--card-prompts-border))]">
                <h4 className="font-semibold">3. Background Information</h4>
                <p className="text-muted-foreground">
                  "I'm 45 years old, earn $75,000 annually, have $50,000 in savings, and want to retire at 65."
                </p>
              </div>
              
              <div className="p-4 border-l-4 border-[hsl(var(--card-prompts-border))]">
                <h4 className="font-semibold">4. Format Specification</h4>
                <p className="text-muted-foreground">
                  "Please provide your advice in a structured plan with monthly savings targets and investment recommendations."
                </p>
              </div>
              
              <div className="p-4 border-l-4 border-[hsl(var(--card-prompts-border))]">
                <h4 className="font-semibold">5. Constraints or Requirements</h4>
                <p className="text-muted-foreground">
                  "I have a moderate risk tolerance and prefer index funds over individual stocks."
                </p>
              </div>
              
              <div className="p-4 border-l-4 border-[hsl(var(--card-prompts-border))]">
                <h4 className="font-semibold">6. Examples (Few-shot learning)</h4>
                <p className="text-muted-foreground">
                  "Here's an example of the kind of plan I'm looking for: [example]"
                </p>
              </div>
            </div>
          </div>
          
          <h3 className="text-2xl font-semibold mt-8 mb-4">Putting It All Together</h3>
          
          <div className="bg-muted p-6 rounded-md mb-6">
            <p className="font-mono text-sm whitespace-pre-line">
              Act as a financial advisor with expertise in retirement planning.
              
              I need help creating a 5-year savings plan to prepare for retirement. I'm 45 years old, earn $75,000 annually, have $50,000 in savings, and want to retire at 65.
              
              Please provide your advice in a structured plan with monthly savings targets and investment recommendations. I have a moderate risk tolerance and prefer index funds over individual stocks.
              
              Here's an example of the kind of plan I'm looking for:
              - Monthly savings target: $X
              - Recommended allocation: X% in [fund type], X% in [fund type]
              - Projected 5-year growth: $X
              - Key milestones: [milestone 1], [milestone 2]
            </p>
          </div>
          
          <div className="flex items-center gap-2 mb-8">
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Copy className="h-4 w-4" />
              Copy Example
            </button>
          </div>
        </div>
      </section>

      {/* Advanced Techniques Section */}
      <section id="techniques" className="py-8 max-w-4xl mx-auto scroll-mt-20">
        <h2 className="text-3xl font-bold mb-6">3. Advanced Techniques</h2>
        
        <div className="space-y-6">
          <p className="text-lg mb-6">
            Once you've mastered the basics, these advanced techniques can help you get even better results from AI systems.
          </p>
          
          <div className="grid grid-cols-1 gap-6 mb-8">
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-xl font-semibold mb-3">Chain-of-Thought Prompting</h3>
              <p className="text-muted-foreground mb-4">
                Guide the AI to break down complex problems into steps by explicitly asking it to "think step by step."
              </p>
              <div className="bg-muted p-4 rounded-md">
                <p className="font-mono text-sm">
                  "I need to determine the most cost-effective shipping method for my business. 
                  Think step by step about the factors I should consider, how to weigh them, 
                  and how to make the final decision."
                </p>
              </div>
            </div>
            
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-xl font-semibold mb-3">Self-Consistency Checking</h3>
              <p className="text-muted-foreground mb-4">
                Ask the AI to verify its own work by reviewing and critiquing its response.
              </p>
              <div className="bg-muted p-4 rounded-md">
                <p className="font-mono text-sm">
                  "After you provide your analysis, please review your own work. 
                  Identify any potential flaws in your reasoning, check your calculations for accuracy, 
                  and suggest improvements to your initial response."
                </p>
              </div>
            </div>
            
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-xl font-semibold mb-3">Persona-Based Prompting</h3>
              <p className="text-muted-foreground mb-4">
                Create detailed personas for the AI to adopt, complete with expertise level, communication style, and perspective.
              </p>
              <div className="bg-muted p-4 rounded-md">
                <p className="font-mono text-sm">
                  "I want you to act as Dr. Maya Chen, a leading expert in climate science with 15 years of research experience. 
                  Dr. Chen communicates complex scientific concepts in accessible language while maintaining scientific accuracy. 
                  She is cautiously optimistic about technological solutions but emphasizes the need for policy changes. 
                  As Dr. Chen, explain the potential impact of carbon capture technologies."
                </p>
              </div>
            </div>
            
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-xl font-semibold mb-3">Multi-Perspective Analysis</h3>
              <p className="text-muted-foreground mb-4">
                Ask the AI to analyze a topic from multiple viewpoints or disciplines.
              </p>
              <div className="bg-muted p-4 rounded-md">
                <p className="font-mono text-sm">
                  "Analyze the impact of remote work on urban development from three perspectives: 
                  1) an economist focusing on commercial real estate markets, 
                  2) a sociologist studying community formation, and 
                  3) an environmental scientist examining carbon emissions from commuting."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section id="examples" className="py-8 max-w-4xl mx-auto scroll-mt-20">
        <h2 className="text-3xl font-bold mb-6">4. Real-World Examples</h2>
        
        <div className="space-y-6">
          <p className="text-lg mb-6">
            See how effective prompt engineering can be applied across different domains and tasks.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-xl font-semibold mb-3">Content Creation</h3>
              <div className="bg-muted p-4 rounded-md mb-4">
                <p className="font-mono text-sm">
                  "Act as an experienced content strategist. Help me create an outline for a blog post about sustainable gardening practices. The target audience is urban dwellers with limited space. The post should be informative but approachable, around 1500 words, and include practical tips that can be implemented immediately. Please structure the outline with main sections and key points for each section."
                </p>
              </div>
              <div className="flex justify-end">
                <button className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                  <Copy className="h-3 w-3" />
                  Copy
                </button>
              </div>
            </div>
            
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-xl font-semibold mb-3">Data Analysis</h3>
              <div className="bg-muted p-4 rounded-md mb-4">
                <p className="font-mono text-sm">
                  "I have sales data showing a 15% decline in Q3 compared to Q2. As a business analyst, help me structure an investigation into the possible causes. What data should I examine first? What external factors might be relevant? What internal metrics could provide insights? Please provide a methodical approach to analyzing this decline and identifying potential solutions."
                </p>
              </div>
              <div className="flex justify-end"><response clipped><NOTE>To save on context only part of this file has been shown to you. You should retry this tool after you have searched inside the file with `grep -n` in order to find the line numbers of what you are looking for.</NOTE>