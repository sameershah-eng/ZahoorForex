export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  highlighted?: boolean;
  minDeposit: string;
  tagline: string;
  ctaText: string;
  ctaHref: string;
  features: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: 'trading' | 'account' | 'safety' | 'general';
}

export interface MediaArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  excerpt: string;
  content: string;
  image: string;
}

export interface StatItem {
  id: string;
  value: string;
  numericTarget: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel: string;
}

export const SITE_DATA = {
  brand: {
    name: "Forex Bank Pro",
    shortName: "FBP",
    slogan: "Automated Forex Trading & Expert Advisor (EA) Platform",
    tagline: "Sophisticated Algorithms. Global 24-Hour Reach. Disciplined Risk Management.",
    contactEmail: "info@forexbankpro.com",
    registeredAddress: "5900 Balcones Drive STE 100, Austin TX 78731, USA",
    headOffice: "Meridian Plaza, Wickham's Cay 1, Road Town, Tortola VG1110, British Virgin Islands",
    registrationNumber: "BVI #1024298",
    trustCompanyNumber: "Trust Company Complex 010072121",
    minimumDeposit: "$250",
    riskWarning: "CFDs are leveraged products and can result in the loss of your entire capital. Past performance is not indicative of future results. Forex Bank Pro provides algorithmic execution software and educational resources; automated trading does not eliminate market risk.",
  },

  navigation: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Accounts",
      href: "/register/live",
      children: [
        { label: "Open Live Account", href: "/register/live", description: "Deploy automated EAs from $250 minimum deposit" },
        { label: "Try Free Demo", href: "/register/demo", description: "Risk-free practice with $10,000 in virtual capital" },
        { label: "Account Plans & Tiers", href: "/plans", description: "Compare Demo, Starter ($250), and Pro Institutional tiers" },
        { label: "Safety of Funds", href: "/funds/safety", description: "Tier-1 bank segregation and negative balance protection" },
        { label: "Deposit & Withdrawal", href: "/funds/deposit", description: "Instant cards, crypto, and zero fee payment gateways" },
      ]
    },
    {
      label: "Trading",
      href: "/products/forex",
      children: [
        { label: "Forex Currencies", href: "/products/forex", description: "Major, minor & exotic pairs with raw spreads from 0.0 pips" },
        { label: "Global Share CFDs", href: "/products/share-cfds", description: "Tech giants & corporate equities with institutional execution" },
        { label: "Commodities & Metals", href: "/products/commodities", description: "Gold (XAU/USD), Silver, and Oil high-liquidity CFDs" },
        { label: "Client Services & VPS", href: "/funds/client-services", description: "Equinix LD4 co-located ultra-low latency VPS hosting" },
      ]
    },
    {
      label: "Tools & Media",
      href: "/calculator",
      children: [
        { label: "Forex Profit/Loss Calculator", href: "/calculator", description: "Live pip value, lot size, and profit simulator in real-time" },
        { label: "Trader Knowledge Pre-Test", href: "/pre-test", description: "Interactive 5-question readiness quiz with score & feedback" },
        { label: "News & Market Analysis", href: "/media", description: "Algorithmic research, macro perspectives, and video webinars" },
        { label: "Frequently Asked Questions", href: "/faq", description: "Searchable directory of EA mechanics, safety, and policies" },
      ]
    },
    {
      label: "Company",
      href: "/about",
      children: [
        { label: "About Forex Bank Pro", href: "/about", description: "Our quantitative heritage, vision, and leadership" },
        { label: "Algorithmic Architecture", href: "/about#our-system", description: "Expert Advisor multi-timeframe logic & risk filters" },
        { label: "Regional Representatives", href: "/partnership/representatives", description: "Host localized branches with institutional revenue share" },
        { label: "Introducing Brokers (IB)", href: "/partnership/affiliates", description: "Earn up to $15/lot on referred client turnover" },
        { label: "Contact Global Support", href: "/contact", description: "Austin, TX & British Virgin Islands operations desks" },
      ]
    },
  ] as NavItem[],

  tickerPairs: [
    { symbol: "EUR/USD", name: "Euro / US Dollar", basePrice: 1.0842, pipSize: 0.0001, spread: 0.2 },
    { symbol: "GBP/USD", name: "British Pound / US Dollar", basePrice: 1.2915, pipSize: 0.0001, spread: 0.4 },
    { symbol: "USD/JPY", name: "US Dollar / Japanese Yen", basePrice: 151.68, pipSize: 0.01, spread: 0.3 },
    { symbol: "XAU/USD", name: "Gold / US Dollar", basePrice: 2684.50, pipSize: 0.1, spread: 0.8 },
  ],

  partnerLogos: [
    { name: "Equinix LD4", type: "Low-Latency Data Infrastructure" },
    { name: "OneZero", type: "Liquidity Hub Engine" },
    { name: "FastMatch FX", type: "ECN Liquidity Aggregation" },
    { name: "MetaQuotes", type: "Algorithmic Platform Technology" },
    { name: "Currenex", type: "Institutional Forex Gateway" },
    { name: "LMAX Exchange", type: "No Last Look Liquidity" },
  ],

  stats: [
    {
      id: "stat-1",
      value: "[Add stat]",
      numericTarget: 480,
      suffix: "K+",
      label: "[Add stat]",
      sublabel: "Registered accounts across 120+ countries"
    },
    {
      id: "stat-2",
      value: "[Add stat]",
      numericTarget: 99,
      suffix: ".9%",
      label: "[Add stat]",
      sublabel: "Automated algorithmic order uptime"
    },
    {
      id: "stat-3",
      value: "[Add stat]",
      numericTarget: 24,
      suffix: "/5",
      label: "[Add stat]",
      sublabel: "Continuous quantitative market execution"
    },
    {
      id: "stat-4",
      value: "[Add stat]",
      numericTarget: 12,
      suffix: "ms",
      label: "[Add stat]",
      sublabel: "Average institutional server execution speed"
    }
  ] as StatItem[],

  services: [
    {
      id: "ea-trading",
      title: "Automated EA Trading",
      description: "Proprietary algorithmic Expert Advisors executing continuous market opportunities with millisecond precision and rule-based discipline.",
      icon: "Cpu",
      badge: "Algorithmic Core",
      bullets: [
        "Emotion-free quantitative execution",
        "Multi-timeframe trend & momentum logic",
        "24-hour round-the-clock market scanning"
      ]
    },
    {
      id: "risk-mgmt",
      title: "Advanced Risk Management",
      description: "Rigorous capital protection layers built into every automated position, including dynamic stop-loss, max daily drawdown caps, and position sizing.",
      icon: "ShieldCheck",
      badge: "Capital Defense",
      bullets: [
        "Automated trailing stop & hard cutoffs",
        "Portfolio diversification across pairs",
        "Negative balance protection protocol"
      ]
    },
    {
      id: "transparency",
      title: "Transparency & Real-Time Reporting",
      description: "Complete visibility into every trade, lot size, spread, and algorithmic telemetry through your personal client dashboard and audit logs.",
      icon: "BarChart3",
      badge: "Real-time Metrics",
      bullets: [
        "Instant trade notifications & history",
        "Comprehensive drawdown & yield charts",
        "Exportable tax & compliance statements"
      ]
    }
  ],

  howItWorks: [
    {
      step: "01",
      title: "Register Your Profile",
      description: "Open a secure Live or Demo account in under 3 minutes with streamlined identity verification and KYC standards."
    },
    {
      step: "02",
      title: "Fund Your Capital",
      description: "Deposit securely from $250 via instant cards, crypto, or direct bank transfer with zero platform deposit fees."
    },
    {
      step: "03",
      title: "Activate Expert Advisor",
      description: "Select your preferred risk tolerance profile and attach our algorithmic EA strategy directly to your account."
    },
    {
      step: "04",
      title: "Monitor & Scale",
      description: "Track live algorithmic positions in real-time on desktop or mobile, compound earnings, or withdraw funds anytime."
    }
  ],

  pricingPlans: [
    {
      id: "demo",
      name: "Free Demo Account",
      price: "$0",
      period: "forever",
      highlighted: false,
      minDeposit: "$0 minimum",
      tagline: "Test our algorithmic execution completely risk-free.",
      ctaText: "Try Free Demo",
      ctaHref: "/register/demo",
      features: [
        "$10,000 virtual balance",
        "Real-time live market pricing",
        "Full EA backtesting environment",
        "No expiration on active accounts",
        "Standard educational video tutorials",
        "Community forum access"
      ]
    },
    {
      id: "starter",
      name: "Starter Live Account",
      price: "$250",
      period: "min deposit",
      highlighted: true,
      minDeposit: "$250 starting capital",
      tagline: "Our most popular entry into live automated forex trading.",
      ctaText: "Open Live Account",
      ctaHref: "/register/live",
      features: [
        "Live Expert Advisor (EA) automation",
        "Spreads starting from 0.8 pips",
        "24/5 dedicated technical support",
        "Automated stop-loss & risk caps",
        "Real-time mobile portfolio app",
        "Zero deposit fees on all gateways",
        "Full transparency trade logging"
      ]
    },
    {
      id: "pro",
      name: "Pro Institutional",
      price: "[Add tier]",
      period: "account tier",
      highlighted: false,
      minDeposit: "[Add tier] minimum balance",
      tagline: "Tailored for high-volume traders, IBs, and institutional desks.",
      ctaText: "Inquire for Pro",
      ctaHref: "/contact?subject=pro-account",
      features: [
        "Ultra-low raw spreads from 0.0 pips",
        "Co-located ultra-low latency VPS included",
        "Customizable EA parameters & weights",
        "Priority 1-on-1 institutional manager",
        "Multi-account manager (MAM/PAMM) access",
        "Custom liquidity pools & deep order book"
      ]
    }
  ] as PricingPlan[],

  testimonials: [
    {
      id: "test-1",
      quote: "\"[Add testimonial placeholder - The algorithmic discipline and risk containment in Forex Bank Pro transformed how we manage currency exposure without emotional bias.]\"",
      author: "[Add Client Name]",
      role: "Managing Director, [Add Firm]",
      location: "Austin, Texas",
      rating: 5
    },
    {
      id: "test-2",
      quote: "\"[Add testimonial placeholder - Starting with the $250 live account was straightforward. Real-time reporting on my phone allows complete peace of mind while the EA runs 24 hours.]\"",
      author: "[Add Client Name]",
      role: "Private Algorithmic Trader",
      location: "London, UK",
      rating: 5
    },
    {
      id: "test-3",
      quote: "\"[Add testimonial placeholder - The transparent execution and automated stop-loss protection have provided genuine risk control through high-volatility central bank sessions.]\"",
      author: "[Add Client Name]",
      role: "Fund Analyst, [Add Capital Group]",
      location: "Singapore",
      rating: 5
    }
  ] as TestimonialItem[],

  faqs: [
    {
      id: "faq-1",
      category: "trading",
      question: "What is an Expert Advisor (EA) in Forex trading?",
      answer: "An Expert Advisor (EA) is an automated trading software program developed for financial platforms like MetaTrader. It executes pre-programmed algorithmic trading strategies—such as technical indicators, trend following, and volatility breakouts—automatically without requiring manual human order entry. This removes psychological biases, fear, and fatigue from trading decisions."
    },
    {
      id: "faq-2",
      category: "trading",
      question: "How does Forex Bank Pro automate my trades?",
      answer: "Once you open and fund an account (from $250), our verified quantitative Expert Advisor algorithms are connected to your trading account. The algorithms continuously scan global currency markets 24 hours a day, 5 days a week. When market conditions match the algorithm's mathematical entry rules, positions are automatically opened and managed with predefined stop-loss and take-profit targets."
    },
    {
      id: "faq-3",
      category: "account",
      question: "What is the minimum deposit to start trading?",
      answer: "You can start testing our platform with a Free Demo Account ($0 capital, $10,000 virtual balance). To trade with live capital and active EA automation, our Starter Live Account begins at just $250 minimum deposit."
    },
    {
      id: "faq-4",
      category: "safety",
      question: "Are my funds safe and segregated?",
      answer: "Yes. In accordance with strict regulatory requirements, all client capital is held in segregated client trust accounts at Tier-1 credit institutions, completely isolated from company operating funds. We also provide negative balance protection, guaranteeing your loss cannot exceed your account balance."
    },
    {
      id: "faq-5",
      category: "safety",
      question: "How does Forex Bank Pro manage downside market risk?",
      answer: "Every single automated trade includes hard stop-loss orders set at the moment of entry. Additionally, our risk management system enforces maximum daily drawdown caps, dynamic position sizing based on account equity, and automatic pausing during extreme black-swan market volatility or high-impact economic news releases."
    },
    {
      id: "faq-6",
      category: "account",
      question: "Can I withdraw my money at any time?",
      answer: "Yes. You have full custody and control over your capital. You can request a withdrawal 24/7 directly from your client portal. Standard withdrawal requests are processed within 24 hours without penalty fees."
    },
    {
      id: "faq-7",
      category: "general",
      question: "Where is Forex Bank Pro registered and headquartered?",
      answer: "Forex Bank Pro's registered address is 5900 Balcones Drive STE 100, Austin TX 78731, USA. Our head office is located at Meridian Plaza, Wickham's Cay 1, Road Town, Tortola VG1110, British Virgin Islands (Registration BVI #1024298, Trust Company Complex 010072121)."
    }
  ] as FaqItem[],

  mediaArticles: [
    {
      id: "art-1",
      slug: "emotional-dynamics-and-algorithmic-discipline",
      title: "The Emotional Dynamics of Trading: Navigating Decisions with Algorithmic Discipline",
      category: "Algorithmic Trading",
      date: "October 2026",
      readTime: "5 min read",
      author: "FBP Quantitative Research",
      excerpt: "Why human psychology remains the single greatest bottleneck in financial markets, and how automated rules-based systems eliminate cognitive bias during high-volatility news sessions.",
      content: "Trading in financial markets involves a wide range of strategies that traders employ to make informed decisions. From swing trading to intraday momentum, human decision fatigue frequently leads to premature profit taking and catastrophic loss aversion. Automated Expert Advisors adhere strictly to statistical probabilities and programmed risk parameters, protecting capital from emotional derailment.",
      image: "/src/assets/images/trading_platform_visual_1791376147931.jpg"
    },
    {
      id: "art-2",
      slug: "24-hour-global-currency-cycle",
      title: "Capitalizing on the 24-Hour Market: How Automated EAs Capture London & Tokyo Overlaps",
      category: "Market Structure",
      date: "September 2026",
      readTime: "7 min read",
      author: "FBP Macro Desk",
      excerpt: "Global forex markets never sleep. Exploring how automated execution allows retail investors to capitalize on European and Asian liquidity overlaps while maintaining disciplined risk.",
      content: "Unlike traditional equity exchanges bound to local operating hours, the foreign exchange market trades seamlessly across Wellington, Tokyo, London, and New York. By deploying algorithmic Expert Advisors hosted on low-latency Equinix data centers, traders capture key price movements regardless of their time zone or daily schedule.",
      image: "/src/assets/images/media_algorithmic_trading_1791376165410.jpg"
    },
    {
      id: "art-3",
      slug: "risk-mitigation-frameworks-for-leveraged-cfds",
      title: "Modern Risk Frameworks: Stop-Loss Architecture, Drawdown Caps, and Sizing",
      category: "Risk Management",
      date: "August 2026",
      readTime: "6 min read",
      author: "FBP Risk Committee",
      excerpt: "Deep dive into institutional capital preservation models: how hard stop-losses, portfolio correlation filters, and dynamic volatility scaling protect long-term account survival.",
      content: "Leverage can amplify both gains and losses. Sustainable long-term trading is not about predicting market directions with 100% certainty, but about asymmetric risk-to-reward ratios. At Forex Bank Pro, risk parameters are hardcoded into every EA algorithm before execution begins.",
      image: "/src/assets/images/media_market_analysis_1791376180578.jpg"
    }
  ] as MediaArticle[],

  preTestQuestions: [
    {
      id: "q1",
      question: "What is the primary function of an Expert Advisor (EA) in forex trading?",
      options: [
        "A human financial advisor who gives advice over the phone",
        "An automated algorithmic software that executes trades based on predefined rules",
        "A guaranteed high-yield investment scheme that never incurs losses",
        "A type of government-issued forex license"
      ],
      correctIndex: 1,
      explanation: "An Expert Advisor (EA) is algorithmic code that automates market analysis and trade execution according to strict technical and risk parameters."
    },
    {
      id: "q2",
      question: "Why is a Stop-Loss order fundamental to risk management in leveraged trading?",
      options: [
        "It guarantees that a trade will make a minimum profit",
        "It caps potential broker commissions",
        "It automatically closes a losing position at a predetermined level to prevent catastrophic loss",
        "It increases the leverage of your trading account"
      ],
      correctIndex: 2,
      explanation: "A Stop-Loss order is an automated risk control measure that protects capital by cutting losing trades before drawdowns become unmanageable."
    },
    {
      id: "q3",
      question: "What does a 1 Standard Lot (1.00) represent on EUR/USD?",
      options: [
        "$10,000 worth of currency",
        "100,000 units of the base currency (EUR)",
        "1,000,000 units of currency",
        "$250 minimum deposit"
      ],
      correctIndex: 1,
      explanation: "In spot forex, 1 standard lot equals 100,000 units of the base currency. A 0.01 micro lot equals 1,000 units."
    },
    {
      id: "q4",
      question: "Which of the following is TRUE regarding leveraged CFD trading?",
      options: [
        "Past performance guarantees future profits",
        "Leverage only increases your profits, not your losses",
        "CFDs are leveraged products and can result in the loss of your invested capital",
        "Automated trading eliminates all market risk entirely"
      ],
      correctIndex: 2,
      explanation: "CFDs are leveraged financial instruments. While leverage allows greater market exposure with less initial capital, it amplifies both gains and losses."
    },
    {
      id: "q5",
      question: "What is the minimum starting deposit for a live account on Forex Bank Pro?",
      options: [
        "$250",
        "$5,000",
        "$10,000",
        "$1,000,000"
      ],
      correctIndex: 0,
      explanation: "Forex Bank Pro makes automated EA trading accessible with a low live account entry minimum of just $250."
    }
  ]
};
