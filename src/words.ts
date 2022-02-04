const defaultMessage = ' Using word of the day instead.'

export function getWordOfTheDay() {
  if (location.search) {
    try {
      const query = atob(location.search.slice(1))
      if (query.length !== 5) {
        alert(`Incorrect word length from encoded query. ${defaultMessage}`)
      } else {
        return query
      }
    } catch (e) {
      alert(`Malformed encoded word query. ${defaultMessage}`)
    }
  }

  const now = new Date()
  const start = new Date(2022, 0, 0)
  const diff = Number(now) - Number(start)
  let day = Math.floor(diff / (1000 * 60 * 60 * 24))
  while (day > answers.length) {
    day -= answers.length
  }
  return answers[day]
}

// copied from Wordle source
const answers = [
"su.xd",
"\"(.gj",
")bc.o",
"utu.v",
"(.1w1",
"\"ph's",
";'.fs",
"u.'.e",
"\"by.s",
"\"s:)s",
"r.\"xa",
"(.\"as",
"\"b:)n",
"r.\"ph",
"r.\"n)",
"u.)xl",
"\"p:)i",
"\")ils",
"\"c.xd",
"r.\"zm",
"\"bgxa",
"\"(r.h",
"\"bxep",
"\"bsxi",
")\"gxg",
"y.)\"g",
")\"sii",
")xr.1",
"\"bxhs",
"(.xof",
"\"e:)z",
"y.\"zm",
";\")pr",
")rt.i",
"\"e:;m",
";(.al",
")r.oh",
")v:)n",
"\"r.pm",
"\"e:\"e",
"\"basr",
"'.r.3",
"r.\"ga",
";u.dc",
"ktu.v",
"'.k.i",
"\"(.gi",
")m:)r",
"r.\"le",
"\"xr.z",
";x(.=",
";x'.=",
"\"gr.p",
"'.ykr",
")\"n:)",
"\")\"eq",
"\"t.\"l",
"\"bu.l",
";\"gxg",
"'.r.2",
"k.s;i",
"u.x'e",
"'.r.p",
"u.)hi",
"\"bsii",
";ff'f",
"\"br.p",
"r.\"'s",
";(r.z",
";(r.h",
")zk.i",
"(.\"pa",
")'.sr",
")\"r.o",
"\";\"ph",
";c.of",
")'.pr",
"\"bvsu",
");)ov",
"u.)so",
"\"br.z",
"'.)si",
"r.;fc",
"xac.\"",
"\"br.s",
"\"e:)i",
"\"bsef",
"\"ju.l",
"\"bgxg",
";x'fs",
"\"u.vs",
"u.)'p",
")vu.l",
"c.x's",
"\"bxl=",
"\"?.\"g",
")\"nvv",
"\"sefl",
")c.dr",
";x'.f",
"r.)pr",
"(.\"xa",
")(.gi",
"'.;x=",
"u.)fr",
"\"gxgh",
"\"bn:)",
"\"bc.d",
"r.\"el",
")'prt",
"u.\"ph",
")\"mqr",
")i:)h",
"\"bxsu",
"\"'r.p",
"\"bxle",
"\"b'.s",
"\"g:)s",
")c.of",
"'.)hi",
";1's1",
"\"(.al"
]

const allowedGuesses = [
"su.xd",
"\"(.gj",
")bc.o",
"utu.v",
"(.1w1",
"\"ph's",
";'.fs",
"u.'.e",
"\"by.s",
"\"s:)s",
"r.\"xa",
"(.\"as",
"\"b:)n",
"r.\"ph",
"r.\"n)",
"u.)xl",
"\"p:)i",
"\")ils",
"\"c.xd",
"r.\"zm",
"\"bgxa",
"\"(r.h",
"\"bxep",
"\"bsxi",
")\"gxg",
"y.)\"g",
")\"sii",
")xr.1",
"\"bxhs",
"(.xof",
"\"e:)z",
"y.\"zm",
";\")pr",
")rt.i",
"\"e:;m",
";(.al",
")r.oh",
")v:)n",
"\"r.pm",
"\"e:\"e",
"\"basr",
"'.r.3",
"r.\"ga",
";u.dc",
"ktu.v",
"'.k.i",
"\"(.gi",
")m:)r",
"r.\"le",
"\"xr.z",
";x(.=",
";x'.=",
"\"gr.p",
"'.ykr",
")\"n:)",
"\")\"eq",
"\"t.\"l",
"\"bu.l",
";\"gxg",
"'.r.2",
"k.s;i",
"u.x'e",
"'.r.p",
"u.)hi",
"\"bsii",
";ff'f",
"\"br.p",
"r.\"'s",
";(r.z",
";(r.h",
")zk.i",
"(.\"pa",
")'.sr",
")\"r.o",
"\";\"ph",
";c.of",
")'.pr",
"\"bvsu",
");)ov",
"u.)so",
"\"br.z",
"'.)si",
"r.;fc",
"xac.\"",
"\"br.s",
"\"e:)i",
"\"bsef",
"\"ju.l",
"\"bgxg",
";x'fs",
"\"u.vs",
"u.)'p",
")vu.l",
"c.x's",
"\"bxl=",
"\"?.\"g",
")\"nvv",
"\"sefl",
")c.dr",
";x'.f",
"r.)pr",
"(.\"xa",
")(.gi",
"'.;x=",
"u.)fr",
"\"gxgh",
"\"bn:)",
"\"bc.d",
"r.\"el",
")'prt",
"u.\"ph",
")\"mqr",
")i:)h",
"\"bxsu",
"\"'r.p",
"\"bxle",
"\"b'.s",
"\"g:)s",
")c.of",
"'.)hi",
";1's1",
"\"(.al"
]

export const allWords = [...answers, ...allowedGuesses]
