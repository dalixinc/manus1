"use client"

import Link from "next/link"
import { ArrowRight, BookOpen, CheckCircle, Clock, Lightbulb } from "lucide-react"

export default function ProductivityTips() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="py-12 md:py-24">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight neon-text">
            AI Productivity Tips
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Learn how to leverage AI to streamline your workflow and accomplish more in less time
          </p>
        </div>
      </section>

      {/* Featured Tips */}
      <section className="py-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Essential AI Productivity Strategies</h2>
        
        <div className="space-y-8">
          <div className="rounded-lg border bg-card p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 shrink-0">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Automate Repetitive Tasks</h3>
                <p className="text-muted-foreground mb-4">
                  Identify tasks you perform repeatedly and explore how AI can automate them. This could include email responses, 
                  data entry, scheduling, or basic content creation. By delegating these routine tasks to AI, you free up mental 
                  space and time for more creative and strategic work.
                </p>
                <div className="bg-muted p-4 rounded-md">
                  <p className="font-medium">Pro Tip:</p>
                  <p className="text-sm text-muted-foreground">
                    Start by logging your activities for a week to identify patterns and repetitive tasks that could be automated.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg border bg-card p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 shrink-0">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Batch Similar AI Tasks</h3>
                <p className="text-muted-foreground mb-4">
                  Instead of switching between different types of AI interactions throughout the day, batch similar tasks together. 
                  For example, dedicate specific time blocks for content generation, research, or data analysis with AI tools. 
                  This approach reduces context switching and helps you maintain focus.
                </p>
                <div className="bg-muted p-4 rounded-md">
                  <p className="font-medium">Pro Tip:</p>
                  <p className="text-sm text-muted-foreground">
                    Create templates for common AI interactions to streamline your workflow and maintain consistency.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg border bg-card p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 shrink-0">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Master Prompt Engineering</h3>
                <p className="text-muted-foreground mb-4">
                  The quality of AI outputs directly depends on the quality of your inputs. Invest time in learning effective 
                  prompt engineering techniques to get more accurate, relevant, and useful responses from AI systems. This skill 
                  alone can dramatically improve your productivity when working with AI tools.
                </p>
                <div className="bg-muted p-4 rounded-md">
                  <p className="font-medium">Pro Tip:</p>
                  <p className="text-sm text-muted-foreground">
                    Create a personal library of effective prompts for different tasks and refine them over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg border bg-card p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 shrink-0">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Verify and Refine AI Outputs</h3>
                <p className="text-muted-foreground mb-4">
                  While AI can generate content quickly, it's essential to review and refine the outputs. Develop a systematic 
                  approach to verifying AI-generated information, checking for accuracy, and adding your unique insights. This 
                  hybrid approach combines the efficiency of AI with human expertise and judgment.
                </p>
                <div className="bg-muted p-4 rounded-md">
                  <p className="font-medium">Pro Tip:</p>
                  <p className="text-sm text-muted-foreground">
                    Create a checklist for reviewing AI outputs to ensure consistency and quality in your final work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Productivity Workflows */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">AI-Enhanced Productivity Workflows</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card-ai rounded-lg border p-6 transition-all hover:shadow-md">
            <h3 className="text-xl font-semibold mb-3">Content Creation Workflow</h3>
            <ol className="space-y-2 text-muted-foreground mb-4">
              <li>1. Use AI for topic research and ideation</li>
              <li>2. Generate outline with key points</li>
              <li>3. Expand sections with AI assistance</li>
              <li>4. Edit and refine with your expertise</li>
              <li>5. Use AI for proofreading and suggestions</li>
            </ol>
            <Link 
              href="/productivity-tips/content-workflow" 
              className="inline-flex items-center text-[hsl(var(--card-ai-border))] hover:underline"
            >
              View Detailed Workflow
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="card-productivity rounded-lg border p-6 transition-all hover:shadow-md">
            <h3 className="text-xl font-semibold mb-3">Research Workflow</h3>
            <ol className="space-y-2 text-muted-foreground mb-4">
              <li>1. Define research questions clearly</li>
              <li>2. Use AI to gather initial information</li>
              <li>3. Analyze and synthesize findings</li>
              <li>4. Verify information with reliable sources</li>
              <li>5. Organize insights with AI assistance</li>
            </ol>
            <Link 
              href="/productivity-tips/research-workflow" 
              className="inline-flex items-center text-[hsl(var(--card-productivity-border))] hover:underline"
            >
              View Detailed Workflow
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="card-prompts rounded-lg border p-6 transition-all hover:shadow-md">
            <h3 className="text-xl font-semibold mb-3">Project Management Workflow</h3>
            <ol className="space-y-2 text-muted-foreground mb-4">
              <li>1. Use AI to break down project goals</li>
              <li>2. Generate task lists and timelines</li>
              <li>3. Draft communication templates</li>
              <li>4. Track progress with AI assistance</li>
              <li>5. Analyze results and generate reports</li>
            </ol>
            <Link 
              href="/productivity-tips/project-workflow" 
              className="inline-flex items-center text-[hsl(var(--card-prompts-border))] hover:underline"
            >
              View Detailed Workflow
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Common Pitfalls */}
      <section className="py-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Common AI Productivity Pitfalls to Avoid</h2>
        
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="h-6 w-6 mt-1 rounded-full bg-destructive/20 flex items-center justify-center">
              <span className="text-destructive">✕</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Over-reliance on AI</h3>
              <p className="text-muted-foreground">
                Becoming too dependent on AI without applying critical thinking can lead to accepting flawed outputs or missing important nuances.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="h-6 w-6 mt-1 rounded-full bg-destructive/20 flex items-center justify-center">
              <span className="text-destructive">✕</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Neglecting to Verify Information</h3>
              <p className="text-muted-foreground">
                Failing to fact-check AI-generated content can lead to propagating inaccuracies or outdated information.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="h-6 w-6 mt-1 rounded-full bg-destructive/20 flex items-center justify-center">
              <span className="text-destructive">✕</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Tool Overload</h3>
              <p className="text-muted-foreground">
                Adopting too many AI tools simultaneously can create a fragmented workflow and increase cognitive load rather than reducing it.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="h-6 w-6 mt-1 rounded-full bg-destructive/20 flex items-center justify-center">
              <span className="text-destructive">✕</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Ignoring Learning Curves</h3>
              <p className="text-muted-foreground">
                Underestimating the time needed to learn how to effectively use AI tools can lead to frustration and abandoned productivity systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12">
        <div className="rounded-lg bg-primary/5 p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Productivity?</h2>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Explore our detailed guides and start implementing these AI productivity strategies today.
          </p>
          <Link 
            href="/productivity-tips/getting-started" 
            className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 neon-glow"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
