import React from "react";

export default function LiteracyAutobiographySite() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-stone-100 font-sans">
      {/* Hero / Header */}
      <header className="px-6 py-16 md:py-24 max-w-5xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-10">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white tracking-tight">
            Multimodal Literacy Autobiography
          </h1>
          <p className="text-stone-300 mt-4 text-base md:text-lg leading-relaxed">
            How my voice was shaped by school, culture, language, and
            technology and why that voice matters.
          </p>
        </div>

        <div className="bg-stone-800/60 backdrop-blur-md border border-stone-700 rounded-2xl p-4 md:p-6 shadow-xl w-full md:w-80">
          <h2 className="text-stone-100 font-semibold text-lg mb-2">
            Authorial Intent
          </h2>
          <p className="text-stone-400 text-sm leading-relaxed">
            I chose a website format because my literacy has never only been
            about essays. I communicate through speech, slides, math proofs,
            DMs, code, bilingual captions, and how I show up for my community.
            Putting everything on one screen lets those voices sit together
            instead of getting separated. The dark layered layout is
            intentional: it’s me refusing to let one “school voice” erase the
            other voices I carry. That reflects Bakhtin’s idea that we are made
            of many social voices in dialogue, not just one “proper” voice. 
            It also follows Jewitt’s point that literacy is multimodal, image,
            sound, layout, interface, not just print on paper. 
            I did use AI tools for drafting language and structuring visuals,
            but I used them the way I’d use Canva or Google Slides: as design
            help. The story, the memories, and the artifacts are mine.
          </p>
        </div>
      </header>

      {/* Timeline / Narrative Sections */}
      <section className="max-w-5xl mx-auto px-6 pb-24 grid md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-12 relative">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-10">
          {/* Early Childhood / Early Voice */}
          <article className="bg-stone-800/50 border border-stone-700 rounded-2xl p-6 shadow-xl">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
              Early Voice / Childhood
            </h3>

            <p className="text-stone-300 text-sm leading-relaxed mt-4">
              One of my earliest “literacy moments” is me holding a diploma
              almost as big as me. I love that photo because it looks like I’m
              already being handed this identity: “You’re smart. You’re going
              to achieve things.” Before I even understood what school really
              was, adults were already talking to me like education was my job.
              People clapped for me, told me I was “going somewhere,” and I
              internalized that fast. I learned really early that being a
              certain kind of student, quiet, advanced, impressive, got you
              praise. So for me, literacy wasn’t only reading. It was learning
              how to present myself in a way adults respected.
            </p>

            <p className="text-stone-300 text-sm leading-relaxed mt-4">
              At the same time, I was learning how people in my family actually
              speak to each other — playfully, loudly, layered with attitude
              and care. That talk is rhythmic and fast, and it carries history.
              It’s jokes, warning, love, boundaries, all in one. I understood
              pretty early that there was “school voice” and “home voice,” and
              I started switching without even thinking about it.
            </p>

            <p className="text-stone-400 text-xs leading-relaxed mt-4 italic">
              Anzaldúa describes being punished for speaking Spanish, like her
              tongue itself was “too much,” and she asks how you’re supposed to
              “tame a wild tongue.” She shows how language is not just grammar,
              it’s identity and dignity.  I relate to that.
              Even if I wasn’t literally getting hit for how I talked, I felt
              the pressure to clean it up, smooth it out, and make it sound
              “professional” for adults. That’s where my literacy started: in
              that tension.
            </p>

            <div className="mt-6 bg-stone-900/60 border border-stone-700 rounded-xl p-4 text-xs text-stone-400 leading-relaxed">
              <p className="font-semibold text-stone-200 text-sm mb-2">
                Artifact:
              </p>
              <div className="flex flex-col gap-3">
                <img
                  src="/graduation.jpg"
                  alt="Me as a kid holding my diploma"
                  className="w-full rounded-lg border border-stone-700 object-cover"
                />
                <p>
                  Me holding my first “diploma.” I’m smiling but also being
                  told, “This is who you are now.” That moment is literally a
                  performance of literacy before I even had language for it.
                </p>
              </div>
            </div>
          </article>

          {/* Literacy as Power / Community Voice */}
          <article className="bg-stone-800/50 border border-stone-700 rounded-2xl p-6 shadow-xl">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-indigo-400" />
              Literacy as Power / Community Voice
            </h3>

            <p className="text-stone-300 text-sm leading-relaxed mt-4">
              Later, literacy stopped being just “be good in school” and
              started being “use your voice.” I have a picture of myself
              speaking at a veterans celebration event. I’m not turning in a
              worksheet. I’m not getting graded. I’m literally in front of
              people, honoring their service, representing my org, and trying
              to make the room feel seen.
            </p>

            <p className="text-stone-300 text-sm leading-relaxed mt-4">
              That moment matters to me because it’s where I felt language as
              responsibility. You have to be accurate, respectful, warm, and
              confident — all at once — because you’re speaking for more than
              just you. I realized that I could move people with how I talk and
              how I frame things. That’s not “extra.” That’s literacy as a
              leadership skill.
            </p>

            <p className="text-stone-400 text-xs leading-relaxed mt-4 italic">
              Ernest Morrell talks about growing up in Oakland, where literacy
              was tied to survival and community — using your words to “speak
              truth to power,” fight disrespect, protect people you love, and
              challenge systems like police violence. Literacy, for him, was
              never neutral. It was political and collective. 
              I recognize that in myself when I’m on a mic. I’m not just
              reading lines. I’m trying to hold space for people and say,
              “We’re here. We matter.”
            </p>

            <div className="mt-6 bg-stone-900/60 border border-stone-700 rounded-xl p-4 text-xs text-stone-400 leading-relaxed">
              <p className="font-semibold text-stone-200 text-sm mb-2">
                Artifact:
              </p>
              <div className="flex flex-col gap-3">
                <img
                  src="/speaking.jpg"
                  alt="Me speaking at a veterans celebration event"
                  className="w-full rounded-lg border border-stone-700 object-cover"
                />
                <p>
                  Speaking at a veterans celebration. This is me using public
                  language to honor people and build community in real time.
                  This is also literacy.
                </p>
              </div>
            </div>
          </article>
        </div>

        {/* timeline bar middle column */}
        <div className="hidden md:flex flex-col items-center">
          <div className="w-1 bg-gradient-to-b from-emerald-400 via-indigo-400 to-rose-400 rounded-full flex-1" />
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-10">
          {/* School Literacy / Distance */}
          <article className="bg-stone-800/50 border border-stone-700 rounded-2xl p-6 shadow-xl">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-rose-400" />
              School Literacy / Distance & Expectation
            </h3>

            <p className="text-stone-300 text-sm leading-relaxed mt-4">
              In school I got labeled “strong academically.” I have this
              assignment from high school geometry where the teacher basically
              held me up as proof: “Look how good this is.” Getting praised for
              math made me feel proud, but it also came with pressure. Once
              people see you like that, they expect you to always be the one
              who gets it right, explains it to everyone else, stays calm, never
              struggles.
            </p>

            <p className="text-stone-300 text-sm leading-relaxed mt-4">
              What nobody sees in that moment is that being “the good student”
              can start to separate you from people around you. You start
              talking more in the school voice than your normal voice. You
              start editing yourself so you sound like what teachers want to
              hear. You get used to swallowing parts of how you naturally
              think. And honestly, that can feel lonely.
            </p>

            <p className="text-stone-400 text-xs leading-relaxed mt-4 italic">
              Rodriguez calls himself a “scholarship boy,” meaning he was
              praised for academic excellence but slowly pulled away from his
              family’s way of speaking and being. He says he was successful and
              sad at the same time, proud and isolated. 
              That hit me. People see the A. They don’t always see the cost.
            </p>

            <div className="mt-6 bg-stone-900/60 border border-stone-700 rounded-xl p-4 text-xs text-stone-400 leading-relaxed">
              <p className="font-semibold text-stone-200 text-sm mb-2">
                Artifact:
              </p>
              <div className="flex flex-col gap-3">
                <img
                  src="/assignmets.jpg"
                  alt="High school geometry assignment with teacher praise"
                  className="w-full rounded-lg border border-stone-700 object-cover"
                />
                <p>
                  High school geometry assignment where I was praised for being
                  “so good” at it. This is academic literacy as status — and as
                  expectation.
                </p>
              </div>
            </div>
          </article>

          {/* Present Day / Multimodal Me */}
          <article className="bg-stone-800/50 border border-stone-700 rounded-2xl p-6 shadow-xl">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-yellow-400" />
              Multimodal Me / Present Day
            </h3>

            <p className="text-stone-300 text-sm leading-relaxed mt-4">
              Now my literacy is layered. I write research notes. I switch
              between English and Spanish. I design slides. I plan events. I
              tutor people through concepts. I pitch ideas to adults. And I
              code. Coding is huge for me — I literally talk to machines and
              build tools. That’s communication. That’s problem framing.
              That’s precision. That’s creativity. I’m including an image of my
              code because I want it to sit here next to speeches, schoolwork,
              and childhood pictures like it belongs — because it does.
            </p>

            <p className="text-stone-300 text-sm leading-relaxed mt-4">
              When I’m coding, I’m not “less literate.” I’m multilingual in a
              different way. I’m moving between natural language (“what do I
              want this to do?”) and technical language (“how do I tell the
              system to actually do it?”). I move between plain voice, formal
              voice, community voice, and programming voice depending on who or
              what I’m talking to. That’s Bakhtin in real life: multiple voices
              in one person, constantly negotiating meaning. 
            </p>

            <p className="text-stone-400 text-xs leading-relaxed mt-4 italic">
              Jewitt argues that literacy now includes image, layout, gesture,
              screen, interface — not just printed text. 
              My “literacy” shows up in code windows, Canva decks, voice memos,
              and public speaking, not just essays. Katznelson & Bernstein point
              out that multilingualism gets framed today as economic value:
              “global advantage,” “human capital,” “marketability.” 
              I think about that a lot. People used to treat certain ways of
              speaking like a problem. Now institutions brag about “future
              global leaders” who can move between worlds. I am that, but I’m
              also still the kid who learned when to switch my voice so adults
              would take me seriously.
            </p>

            <div className="mt-6 bg-stone-900/60 border border-stone-700 rounded-xl p-4 text-xs text-stone-400 leading-relaxed">
              <p className="font-semibold text-stone-200 text-sm mb-2">
                Artifact:
              </p>
              <div className="flex flex-col gap-3">
                <img
                  src="/coding_2.png"
                  alt="Screenshot of my code / technical work"
                  className="w-full rounded-lg border border-stone-700 object-cover"
                />
                <p>
                  Screenshot of my code. This is one of the places I express
                  ideas now. This is also literacy.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Theory Callouts */}
      <section className="bg-stone-950/60 border-y border-stone-700 py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-stone-800/40 border border-stone-700 rounded-2xl p-6 shadow-lg">
            <p className="text-stone-400 uppercase tracking-wide text-[10px] font-medium">
              Bakhtin: Dialogic / Heteroglossia
            </p>
            <p className="text-stone-200 text-sm leading-relaxed mt-2">
              My story isn’t one voice. It’s math class voice, home voice,
              community voice, engineering voice, and the calm professional
              voice adults expect me to have in certain rooms. Bakhtin says
              language is always made of many social voices crashing into each
              other.  That’s literally how I move through a day.
            </p>
          </div>

          <div className="bg-stone-800/40 border border-stone-700 rounded-2xl p-6 shadow-lg">
            <p className="text-stone-400 uppercase tracking-wide text-[10px] font-medium">
              Bogdan & Biklen: Data / Evidence
            </p>
            <p className="text-stone-200 text-sm leading-relaxed mt-2">
              Field notes, screenshots, flyers, photos from events, these are
              all data. Bogdan & Biklen say that in qualitative work, what looks
              like “regular life” becomes evidence when you treat it seriously
              and document it.  That’s what I’m doing here.
              I’m saying: this is proof of my literacy, not just memories.
            </p>
          </div>

          <div className="bg-stone-800/40 border border-stone-700 rounded-2xl p-6 shadow-lg">
            <p className="text-stone-400 uppercase tracking-wide text-[10px] font-medium">
              So What?
            </p>
            <p className="text-stone-200 text-sm leading-relaxed mt-2">
              My literacy is layered: culture, math, care, code, public voice,
              bilingual movement, advocacy. I was taught to make myself sound
              acceptable, but I’m also learning to sound like myself. I’m not
              just learning to read and write. I’m learning how to exist in
              different spaces without letting anyone “tame my tongue.” 
            </p>
          </div>
        </div>
      </section>

      {/* Works Cited / Footer */}
      <footer className="max-w-5xl mx-auto px-6 py-16 text-stone-400 text-xs leading-relaxed">
        <h4 className="text-stone-200 text-sm font-semibold mb-4">
          Works Cited
        </h4>
        <ul className="space-y-2 list-disc list-inside">
          <li>
            Anzaldúa, Gloria. "How to Tame a Wild Tongue."{" "}
            <span className="italic">
              Borderlands/La Frontera: The New Mestiza
            </span>
            , 1987.
          </li>
          <li>
            Rodriguez, Richard. "The Achievement of Desire."{" "}
            <span className="italic">Hunger of Memory</span>, 1981.
          </li>
          <li>
            Jewitt, Carey. "Multimodality and Literacy in School Classrooms."{" "}
            <span className="italic">Review of Research in Education</span>,
            vol. 32, 2008, pp. 241–267.
          </li>
          <li>
            Katznelson, Noah, and Katie A. Bernstein. "Rebranding
            Bilingualism: The Shifting Discourses of Language Education Policy
            in California's 2016 Election."{" "}
            <span className="italic">Linguistics and Education</span>, vol.
            40, 2017, pp. 11–26.
          </li>
          <li>
            Morrell, Ernest, with Cati de los Ríos. Interview.{" "}
            <span className="italic">Esteem</span>, 2013.
          </li>
          <li>
            Bakhtin, M. M. "Discourse in the Novel." 1935.{" "}
            <span className="italic">The Dialogic Imagination</span>.
          </li>
          <li>
            Bogdan, Robert C., and Sari Knopp Biklen.{" "}
            <span className="italic">Qualitative Research for Education</span
            >, 2nd ed., Allyn and Bacon, 1992.
          </li>
        </ul>
        <p className="text-[10px] text-stone-500 mt-8 max-w-xl">
          Citation style can be APA / MLA / Chicago, but must stay consistent.
        </p>

        <p className="text-[10px] text-stone-600 mt-6">
          © {new Date().getFullYear()} Multimodal Literacy Autobiography.
        </p>
      </footer>
    </main>
  );
}
