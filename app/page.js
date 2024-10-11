import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Mic, Video, Brain, Star } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header className="px-4 lg:px-6 h-14 flex items-center">
          <Link className="flex items-center justify-center" href="/">
            <Brain className="h-6 w-6 mr-2" />
            <span className="font-bold">AI Mock Interviewer</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-base font-medium  hover:text-blue-700 hover:font-bold"
              href="/dashboard"
            >
              Dashboard
            </Link>
            <Link
              className="text-base font-medium  hover:text-blue-700 hover:font-bold"
              href="/questions"
            >
              Questions
            </Link>
            <Link
              className="text-base font-medium  hover:text-blue-700 hover:font-bold"
              href="/upgrade"
            >
              Upgrade
            </Link>
            <Link
              className="text-base font-medium hover:text-blue-700 hover:font-bold"
              href="/how-it-works"
            >
              How It Works
            </Link>
          </nav>
        </header>
        <main className="flex-1">
          <section
            className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-cover bg-center"
            style={{
              backgroundImage: 'url("/placeholder.svg?height=1080&width=1920")',
            }}
          >
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-blue-600">
                    Ace Your Next Job Interview with AI
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    Practice with our AI-powered mock interviewer and boost your
                    confidence. Get real-time feedback and improve your skills.
                  </p>
                </div>
                <div className="space-x-4">
                  <Link href="/dashboard">
                    <Button
                      className="h-11 px-8 bg-blue-600 hover:bg-blue-700"
                      size="lg"
                    >
                      Start Mock Interview
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="h-11 px-8 border-blue-600 text-blue-600 hover:bg-blue-50"
                    size="lg"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </section>
          <section
            id="features"
            className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
          >
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
                Key Features
              </h2>
              <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
                <Card>
                  <CardHeader>
                    <Mic className="h-10 w-10 mb-2 text-blue-600" />
                    <CardTitle>Voice Interaction</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Engage in natural conversations with our AI interviewer
                    using advanced speech recognition technology.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Video className="h-10 w-10 mb-2 text-blue-600" />
                    <CardTitle>Video Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Receive feedback on your body language and facial
                    expressions to improve your non-verbal communication.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Brain className="h-10 w-10 mb-2 text-blue-600" />
                    <CardTitle>Personalized Feedback</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Get detailed, constructive feedback on your responses,
                    helping you identify areas for improvement.
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
                How It Works
              </h2>
              <ol className="grid gap-6 lg:grid-cols-3 lg:gap-12">
                <li className="flex flex-col items-center text-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white text-lg font-bold">
                    1
                  </div>
                  <h3 className="mt-4 text-xl font-bold">
                    Choose Your Interview Type
                  </h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Select from various job roles and interview styles.
                  </p>
                </li>
                <li className="flex flex-col items-center text-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white text-lg font-bold">
                    2
                  </div>
                  <h3 className="mt-4 text-xl font-bold">
                    Engage with AI Interviewer
                  </h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Answer questions and showcase your skills in a realistic
                    interview setting.
                  </p>
                </li>
                <li className="flex flex-col items-center text-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white text-lg font-bold">
                    3
                  </div>
                  <h3 className="mt-4 text-xl font-bold">
                    Receive Instant Feedback
                  </h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Get personalized tips and insights to improve your
                    performance.
                  </p>
                </li>
              </ol>
            </div>
          </section>
          <section
            id="testimonials"
            className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
          >
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
                What Our Users Say
              </h2>
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <Card>
                  <CardContent className="pt-4">
                    <div className="flex items-start space-x-4">
                      <Star className="h-6 w-6 text-yellow-500" />
                      <Star className="h-6 w-6 text-yellow-500" />
                      <Star className="h-6 w-6 text-yellow-500" />
                      <Star className="h-6 w-6 text-yellow-500" />
                      <Star className="h-6 w-6 text-yellow-500" />
                    </div>
                    <blockquote className="mt-4 text-lg">
                      "This AI mock interviewer helped me feel so much more
                      confident. I landed my dream job after practicing with
                      it!"
                    </blockquote>
                    <p className="mt-2 font-semibold">
                      Sarah T., Software Engineer
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-4">
                    <div className="flex items-start space-x-4">
                      <Star className="h-6 w-6 text-yellow-500" />
                      <Star className="h-6 w-6 text-yellow-500" />
                      <Star className="h-6 w-6 text-yellow-500" />
                      <Star className="h-6 w-6 text-yellow-500" />
                      <Star className="h-6 w-6 text-yellow-500" />
                    </div>
                    <blockquote className="mt-4 text-lg">
                      "The personalized feedback was invaluable. It helped me
                      identify and improve my weaknesses."
                    </blockquote>
                    <p className="mt-2 font-semibold">
                      Michael R., Marketing Manager
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Ready to Ace Your Interview?
                  </h2>
                  <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Start practicing with our AI mock interviewer today and take
                    the first step towards your dream job.
                  </p>
                </div>
                <Button
                  className="h-11 px-8 bg-blue-600 hover:bg-blue-700"
                  size="lg"
                >
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2024 AI Mock Interviewer. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Privacy
            </Link>
          </nav>
        </footer>
      </div>
    </>
  );
}
