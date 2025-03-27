"use client"

import Link from "next/link"
import { ArrowRight, BookOpen, Code, FileText, MessageSquare, Sparkles } from "lucide-react"

export default function PromptEngineering() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="py-12 md:py-24">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight neon-text">
            The Art of Prompt Engineering
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Learn how to craft effective prompts to get the best results when interacting with AI systems.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">What is Prompt Engineering?</h2>
        <p className="text-lg mb-4">
          Prompt engineering is the process of designing and refining inputs to AI systems to get the most useful, accurate, and relevant outputs. 
          As AI models become more powerful and accessible, the ability to effectively communicate with them becomes an increasingly valuable skill.
        </p>
        <p className="text-lg mb-4">
          Whether you're using AI for content creation, data analysis, coding assistance, or creative work, mastering prompt engineering 
          can dramatically improve your results and productivity.
        </p>
      </section>

      {/* Core Principles */}
      <section className="py-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Core Principles of Effective Prompts</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="card-prompts rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-3">Be Specific and Clear</h3>
            <p className="text-muted-foreground">
              Provide detailed instructions and context. The more specific your prompt, the more targeted the AI's response will be.
            </p>
          </div>
          
          <div className="card-prompts rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-3">Structure Your Requests</h3>
            <p className="text-muted-foreground">
              Break complex requests into steps or sections. Use formatting (bullets, numbering) to organize your prompt.
            </p>
          </div>
          
          <div className="card-prompts rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-3">Provide Context</h3>
            <p className="text-muted-foreground">
              Include relevant background information and explain why you need the information to help the AI understand your goals.
            </p>
          </div>
          
          <div className="card-prompts rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-3">Specify Format and Style</h3>
            <p className="text-muted-foreground">
              Clearly indicate your preferred output format, tone, and style to ensure the response meets your needs.
            </p>
          </div>
          
          <div className="card-prompts rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-3">Use Examples</h3>
            <p className="text-muted-foreground">
              Provide examples of the kind of output you're looking for to guide the AI's response (few-shot learning).
            </p>
          </div>
          
          <div className="card-prompts rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-3">Iterate and Refine</h3>
            <p className="text-muted-foreground">
              Treat prompt engineering as an iterative process. Refine your prompts based on the responses you receive.
            </p>
          </div>
        </div>
      </section>

      {/* Prompt Templates */}
      <section className="py-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Effective Prompt Templates</h2>
        
        <div className="space-y-6">
          <div className="rounded-lg border bg-card p-6">
            <h3 className="text-xl font-semibold mb-3">The Role-Based Prompt</h3>
            <div className="bg-muted p-4 rounded-md mb-4">
              <p className="font-mono text-sm">
                Act as a [specific role/expert]. I need help with [specific task]. 
                The context is [relevant background]. Please provide [specific output format] 
                that addresses [specific requirements].
              </p>
            </div>
            <p className="text-muted-foreground">
              Assigning a role to the AI helps frame its responses from a specific perspective or expertise.
            </p>
          </div>
          
          <div className="rounded-lg border bg-card p-6">
            <h3 className="text-xl font-semibold mb-3">The Step-by-Step Prompt</h3>
            <div className="bg-muted p-4 rounded-md mb-4">
              <p className="font-mono text-sm">
                I need to [accomplish goal]. Please help me by:
                <br />1. [First step/analysis]
                <br />2. [Second step/consideration]
                <br />3. [Third step/output]
                <br />For each step, provide [specific details about what you want].
              </p>
            </div>
            <p className="text-muted-foreground">
              Breaking down complex tasks into steps helps the AI provide more structured and thorough responses.
            </p>
          </div>
          
          <div className="rounded-lg border bg-card p-6">
            <h3 className="text-xl font-semibold mb-3">The Format-Specific Prompt</h3>
            <div className="bg-muted p-4 rounded-md mb-4">
              <p className="font-mono text-sm">
                Please provide information about [topic] in the following format:
                <br />- Summary: A brief overview in 2-3 sentences.
                <br />- Key Points: Bullet points of the most important information.
                <br />- Detailed Explanation: A more comprehensive analysis.
                <br />- Practical Applications: How this can be used in [specific context].
              </p>
            </div>
            <p className="text-muted-foreground">
              Specifying the exact format you want helps ensure the AI's response is organized in a way that's most useful to you.
            </p>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Common Mistakes to Avoid</h2>
        
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="h-6 w-6 mt-1 rounded-full bg-destructive/20 flex items-center justify-center">
              <span className="text-destructive">✕</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Being Too Vague</h3>
              <p className="text-muted-foreground">
                Vague prompts like "Tell me about AI" will yield generic responses. Instead, specify exactly what aspects of AI you want to learn about.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="h-6 w-6 mt-1 rounded-full bg-destructive/20 flex items-center justify-center">
              <span className="text-destructive">✕</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Overloading with Information</h3>
              <p className="text-muted-foreground">
                Including too much irrelevant information can confuse the AI. Focus on what's essential for the task at hand.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="h-6 w-6 mt-1 rounded-full bg-destructive/20 flex items-center justify-center">
              <span className="text-destructive">✕</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Neglecting to Specify Constraints</h3>
              <p className="text-muted-foreground">
                Without constraints like word count or format, the AI might provide responses that don't meet your needs.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="h-6 w-6 mt-1 rounded-full bg-destructive/20 flex items-center justify-center">
              <span className="text-destructive">✕</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Not Iterating on Prompts</h3>
              <p className="text-muted-foreground">
                If you don't get the desired result, refine your prompt rather than starting over completely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Techniques */}
      <section className="py-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Advanced Prompt Engineering Techniques</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg border bg-card p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--card-prompts-border)/0.2)]">
              <Sparkles className="h-6 w-6 text-[hsl(var(--card-prompts-border))]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Chain-of-Thought Prompting</h3>
            <p className="text-muted-foreground">
              Guide the AI to "think step by step" through complex problems to improve reasoning and accuracy.
            </p>
          </div>
          
          <div className="rounded-lg border bg-card p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--card-prompts-border)/0.2)]">
              <Code className="h-6 w-6 text-[hsl(var(--card-prompts-border))]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Few-Shot Learning</h3>
            <p className="text-muted-foreground">
              Provide multiple examples of input-output pairs to help the AI understand the pattern you want it to follow.
            </p>
          </div>
          
          <div className="rounded-lg border bg-card p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--card-prompts-border)/0.2)]">
              <MessageSquare className="h-6 w-6 text-[hsl(var(--card-prompts-border))]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Persona-Based Prompting</h3>
            <p className="text-muted-foreground">
              Create detailed personas for the AI to adopt, complete with expertise level, communication style, and perspective.
            </p>
          </div>
          
          <div className="rounded-lg border bg-card p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--card-prompts-border)/0.2)]">
              <FileText className="h-6 w-6 text-[hsl(var(--card-prompts-border))]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Self-Consistency Checking</h3>
            <p className="text-muted-foreground">
              Ask the AI to evaluate its own responses and refine them for accuracy, completeness, and relevance.
            </p>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Further Resources</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-lg border bg-card p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Comprehensive Guide</h3>
            <p className="text-muted-foreground mb-4">
              Our detailed guide to prompt engineering with examples for different use cases.
            </p>
            <Link 
              href="/prompt-engineering/comprehensive-guide" 
              className="inline-flex items-center text-primary hover:underline"
            >
              Read Guide
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="rounded-lg border bg-card p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Prompt Templates</h3>
            <p className="text-muted-foreground mb-4">
              A collection of ready-to-use prompt templates for various tasks and scenarios.
            </p>
            <Link 
              href="/prompt-engineering/templates" 
              className="inline-flex items-center text-primary hover:underline"
            >
              View Templates
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="rounded-lg border bg-card p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Case Studies</h3>
            <p className="text-muted-foreground mb-4">
              Real-world examples of how effective prompt engineering transformed workflows.
            </p>
            <Link 
              href="/prompt-engineering/case-studies" 
              className="inline-flex items-center text-primary hover:underline"
            >
              Explore Cases
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12">
        <div className="rounded-lg bg-primary/5 p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Master Prompt Engineering?</h2>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Apply these techniques to dramatically improve your interactions with AI and boost your productivity.
          </p>
          <Link 
            href="/prompt-engineering/workshop" 
            className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 neon-glow"
          >
            Join Our Workshop
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
