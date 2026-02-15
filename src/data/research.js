export const publications = [
  {
    title: 'Polling Place Location and the Costs of Voting',
    authors: [
      { name: 'Gaurav Bagwe', url: 'https://www.gauravbagwe.com/' },
      { name: 'Juan Margitic' },
      { name: 'Allison Stashko', url: 'https://sites.google.com/view/allisonstashko/home' },
    ],
    journal: 'American Economic Journal: Economic Policy, Vol. 18, No. 1, February 2026',
    image: '/images/paper_polling_cost.jpeg',
    imageAlt: 'Polling place location and voting costs',
    description:
      'We study how distance to one\u2019s polling place affects the likelihood of voting using a geographic regression discontinuity design with data from Pennsylvania and Georgia. A one-mile increase in distance to polling place reduces the likelihood of voting in person by 2 to 3 percentage points. Effects are two to four times higher among those closest to the polling place. When available, voters substitute to mail-in voting as distance to polling place increases. We estimate a discrete-choice voting model to identify turnout-maximizing polling places. Some precincts have large potential gains in turnout, even when choosing from existing buildings.',
    links: [
      { label: 'Paper', url: 'https://drive.google.com/file/d/1a46Gd-y350eLcAzMbERUBji7cFyJzXRl/view' },
      { label: 'Online Appendix', url: 'https://drive.google.com/file/d/1uOl0YHuG04-50IMShdZZgDl6giASnu_H/view' },
      { label: 'Journal', url: 'https://www.aeaweb.org/articles?id=10.1257/pol.20220435' },
    ],
  },
  {
    title: "Food Stamps and America's Poorest",
    authors: [
      { name: 'Dean Jolliffe', url: 'https://sites.google.com/site/dmjolliffe/home' },
      { name: 'Juan Margitic' },
      { name: 'Laura Tiehen', url: 'https://scholar.google.com/citations?user=KHmIxOoAAAAJ&hl=en' },
      { name: 'Martin Ravallion', url: 'https://economicsandpoverty.com/' },
    ],
    journal: 'American Journal of Agricultural Economics, August 2023, 1\u201330',
    award: "Recipient of the 2024 AAEA's Quality of Research Discovery Award",
    image: '/images_page/AmericasPoorest_floor.png',
    imageAlt: 'Floor in the United States before and after food stamps',
    description:
      'The paper provides the first assessment of: (i) America\u2019s progress in lifting the lower bound\u2014the floor\u2014of the distribution of real income; (ii) whether the country\u2019s largest antipoverty program, SNAP (\u201Cfood stamps\u201D), helped do so. An operational method of estimating the floor is implemented on micro survey data spanning 30 years, with various robustness and significance tests. SNAP partially compensated the poorest, and helped stabilize the floor. Nonetheless, the floor has been sinking over the last 30 years. The efficiency of SNAP in lifting the floor has declined over time. Full coverage of the poorest would lift the floor appreciably.',
    links: [
      { label: 'Paper', url: 'https://jmargitic.github.io/JM/w26025_Jolliffe_Margitic_Ravallion_FoodStampsAndAmericasPoorest.pdf' },
      { label: 'Journal', url: 'https://doi.org/10.1111/ajae.12426' },
    ],
    featuredIn: [
      { source: 'USDA ERS', url: 'https://www.ers.usda.gov/amber-waves/2024/april/new-metric-gauges-how-much-snap-benefits-support-lowest-income-households/' },
      { source: 'Vox', url: 'https://www.vox.com/2019/7/2/20680123/debate-poor-food-stamps-help-snap' },
      { source: 'VoxEU.org', url: 'https://voxeu.org/article/alongside-rising-top-incomes-level-living-america-s-poorest-has-fallen' },
      { source: 'WSJ Blog', url: 'https://blogs.wsj.com/economics/2018/06/21/real-time-economics-the-older-america-gets-the-harder-it-will-be-to-grow-the-economy/' },
      { source: 'Quartz', url: 'https://qz.com/1313455/the-income-of-the-poorest-us-household-continued-to-decline-according-to-new-research/' },
      { source: 'World Economic Forum', url: 'https://www.weforum.org/agenda/2018/06/alongside-rising-top-incomes-the-level-of-living-of-america-s-poorest-has-fallen' },
    ],
  },
  {
    title: "Lifting the Floor? Economic Development, Social Protection and the Developing World's Poorest",
    authors: [
      { name: 'Juan Margitic' },
      { name: 'Martin Ravallion', url: 'https://economicsandpoverty.com/' },
    ],
    journal: 'Journal of Development Economics, Volume 139, June 2019, Pages 97\u2013108',
    image: '/images_page/JDE_floor_spending.png',
    imageAlt: 'Social spending and floor post-transfers',
    description:
      'It is theoretically ambiguous whether people in richer countries have a higher floor to their living standards. Nor is it clear whether social protection spending reaches the poorest and thus lifts the floor. Across countries, the paper finds that higher mean incomes come with a higher floor. The bulk of this is direct rather than via public spending on social protection. Social insurance (mainly public pensions) does the \u201Cheavy lifting\u201D of the floor. Social assistance (mainly targeted cash-transfers) lifts the floor by only 1.5 cents per day on average, which is less than 10% of mean spending on social assistance.',
    links: [
      { label: 'Paper', url: 'https://jmargitic.github.io/JM/Social%20Protection%20Development%20and%20the%20Poorest.pdf' },
      { label: 'Journal', url: 'https://www.sciencedirect.com/science/article/pii/S0304387818311490' },
    ],
  },
]

export const workInProgress = [
  {
    title: 'Where is the Party? Campaign Visits in US Presidential Elections',
    authors: [{ name: 'Juan Margitic' }],
    description:
      'This project examines how presidential candidates strategically choose campaign visit locations within states to maximize electoral returns. Using a theoretical model and a novel dataset of visits from the 2012 and 2016 elections at the county level, the research fills a gap in understanding sub-state strategic allocations under the electoral college system.',
  },
  {
    title: 'Bandwagon Effects in Caucuses',
    authors: [
      { name: 'Gaurav Bagwe', url: 'https://www.gauravbagwe.com/' },
      { name: 'Juan Margitic' },
      { name: 'Ben Solow', url: 'https://sites.google.com/site/bensolow/' },
    ],
    description:
      'Utilizing a regression discontinuity design in the context of the Iowa Democratic presidential caucuses, this study tests how past electoral outcomes act as coordination devices or \u201Cbandwagons.\u201D Results show that candidates narrowly ranking higher in initial rounds receive significantly higher vote shares in subsequent rounds, suggesting that coordination and behavioral motivations are vital in high-stakes elections.',
  },
]

export const idbPublications = [
  {
    title: 'Inova\u00E7\u00F5es para melhoria da informa\u00E7\u00E3o dos estudantes em transi\u00E7\u00E3o para o ensino m\u00E9dio',
    authors: [
      { name: 'Martim Ancona de F. B. Aguiar' },
      { name: 'Gregory Elacqua', url: 'https://sites.google.com/view/gregoryelacqua/home' },
      { name: 'Juan Margitic' },
      { name: 'Danielle Nascimento' },
    ],
    journal: 'IDB Technical Note, 2023',
    image: '/images_page/improving_educacion.png',
    imageAlt: 'Improving student information for high school transition',
    description:
      'This guide details an interactive informational tool designed to help students in Esp\u00EDrito Santo, Brazil, navigate curriculum changes in secondary education. It includes a randomized control trial (RCT) with over 10,000 participants based on behavioral economics nudges to encourage enrollment in full-time education models.',
    links: [
      { label: 'Paper', url: 'https://publications.iadb.org/publications/portuguese/viewer/Inovac%C3%B5es-para-melhoria-da-informac%C3%A3o-dos-estudantes-em-transic%C3%A3o-para-o-ensino-medio--guia-para-sua-jornada-no-novo-ensino-medio-capixaba.pdf' },
      { label: 'IDB Note', url: 'https://publications.iadb.org/pt/inovacoes-para-melhoria-da-informacao-dos-estudantes-em-transicao-para-o-ensino-medio-guia-para-sua' },
    ],
  },
  {
    title: 'Quantifying the Benefits of Digitalizing and Centralizing Teacher Applications and Assignment',
    authors: [
      { name: 'Antonia Aguilera' },
      { name: 'Gregory Elacqua', url: 'https://sites.google.com/view/gregoryelacqua/home' },
      { name: 'Josefina Lavin' },
      { name: 'Juan Margitic' },
      { name: 'Christopher Neilson', url: 'https://christopherneilson.github.io/' },
    ],
    journal: 'IDB Technical Note, 2023',
    image: '/images_page/cuantificando_costos_mat.png',
    imageAlt: 'Net savings from centralized teacher assignment',
    description:
      'This document advocates for digital centralized teacher assignment systems in Latin America. Using administrative data from Ecuador, the study estimates that digitalization could generate over USD 17 million in annual impact through implementation savings and improved teacher-quality matching.',
    links: [
      { label: 'Paper', url: 'https://publications.iadb.org/publications/english/viewer/Quantifying-the-benefits-of-digitalizing-and-centralizing-teacher-applications-and-assignment.pdf' },
      { label: 'IDB Note', url: 'https://publications.iadb.org/en/quantifying-benefits-digitalizing-and-centralizing-teacher-applications-and-assignment' },
    ],
  },
  {
    title: 'Quantifying the Benefits of Digitalizing and Centralizing Student Applications and Assignment to Schools',
    authors: [
      { name: 'Antonia Aguilera' },
      { name: 'Gregory Elacqua', url: 'https://sites.google.com/view/gregoryelacqua/home' },
      { name: 'Josefina Lavin' },
      { name: 'Juan Margitic' },
      { name: 'Christopher Neilson', url: 'https://christopherneilson.github.io/' },
    ],
    journal: 'IDB Technical Note, 2022',
    image: '/images_page/quantifying_the_benefits_of_centralizing_students.png',
    imageAlt: 'Net savings from centralized student assignment',
    description:
      'Analysis of administrative data from Chile suggests that transitioning from decentralized to digital centralized student assignment systems can generate a net impact of USD 13 million by improving transparency, monitoring, and efficiency.',
    links: [
      { label: 'Paper', url: 'https://publications.iadb.org/publications/english/viewer/Quantifying-the-Benefits-of-Digitalizing-and-centralizing-Sudent-Applications-and-Assignment-to-Schools.pdf' },
      { label: 'IDB Note', url: 'https://publications.iadb.org/en/quantifying-benefits-digitalizing-and-centralizing-sudent-applications-and-assignment-schools' },
    ],
  },
  {
    title: 'How to Reboot Education Post-Pandemic: Delivering on the Promise of a Better Future for Youth',
    authors: [{ name: 'Multiple co-authors' }],
    journal: 'IDB Education Department Flagship Publication, 2022',
    image: '/images_page/how_to_reboot_education_image.png',
    imageAlt: 'How to reboot education post-pandemic',
    description:
      'A comprehensive report on the impact of COVID-19 on 165 million students in Latin America and the Caribbean. It outlines policy priorities to rebuild more resilient and equitable education systems to prevent long-term human capital loss.',
    links: [
      { label: 'English', url: 'https://publications.iadb.org/en/how-reboot-education-post-pandemic-delivering-promise-better-future-youth' },
      { label: 'Espa\u00F1ol', url: 'https://publications.iadb.org/publications/spanish/viewer/Como-reconstruir-la-educacion-postpandemia-Soluciones-para-cumplir-con-la-promesa-de-un-mejor-futuro-para-la-juventud.pdf' },
    ],
  },
  {
    title: 'P\u00E9rdidas de aprendizaje debido al COVID-19: desaf\u00EDos y hallazgos en el caso de Colombia',
    authors: [
      { name: 'Ximena Due\u00F1as' },
      { name: 'Gregory Elacqua', url: 'https://sites.google.com/view/gregoryelacqua/home' },
      { name: 'Luis Jaramillo' },
      { name: 'Juan Margitic' },
    ],
    journal: 'IDB Technical Note, 2022',
    image: '/images_page/perdidas_aprendizaje_col.png',
    imageAlt: 'Learning losses in Colombia',
    description:
      'This study analyzes standardized test scores in Colombia post-pandemic, revealing that while average scores might appear stable, they mask significant dropout rates among lower-ability students. The estimated impact of school closures on learning is roughly 0.05 standard deviations.',
    links: [
      { label: 'Paper', url: 'https://publications.iadb.org/publications/spanish/viewer/Perdidas-de-aprendizaje-debido-al-COVID-19-desafios-y-hallazgos-en-el-caso-de-Colombia.pdf' },
      { label: 'IDB Note', url: 'https://publications.iadb.org/es/perdidas-de-aprendizaje-debido-al-covid-19-desafios-y-hallazgos-en-el-caso-de-colombia' },
    ],
  },
]
