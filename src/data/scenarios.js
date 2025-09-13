export const scenarios = [
  {
    id: 1,
    imageKey: "TF5_illustration_trade_off",
    title: "The Student Loan Crossroads",
    description: "The trade-offs between short-term cash flow and long-term debt cost.",
    prompt: "You've graduated with $30,000 in student loans. Which repayment plan do you choose?",
    options: [
      { key: "A", label: "Standard 10-year plan (higher monthly payment, less total interest)." },
      { key: "B", label: "Income-driven plan (lower monthly payment, more total interest)." },
      { key: "C", label: "Deferment (pay nothing now, but interest accrues)." },
    ],
    feedback: {
      A: "You're tackling your debt head-on! A higher monthly payment is tough, but it means you'll pay far less in interest over the life of the loan. Interest is the extra money you pay for the service of borrowing. Paying less interest means you get to keep more of your own money.",
      B: "This option gives you more financial breathing room each month. It's a smart choice if your starting salary is low, but be aware: because you are paying less each month, your loan will grow with interest for a longer time, meaning you'll pay more in total.",
      C: "This is a temporary pause, not a free pass. While you aren't making payments, interest is still being added to your loan balance every single day. This makes your total debt grow, making it the most expensive option in the long run.",
    },
  },
  {
    id: 2,
    imageKey: "TF5_illustration_compass",
    title: "The First Job Offer",
    description: "Introduces retirement accounts, the concept of 'free money' from employer matching, and the power of starting to invest early.",
    prompt: "You receive a job offer for $60,000/year. It includes a 4% 401(k) match.",
    options: [
      { key: "A", label: "Contribute 4% to get the full match." },
      { key: "B", label: "Contribute 10% to save aggressively." },
      { key: "C", label: " Contribute nothing for now to maximize your take-home pay." },
    ],
    feedback: {
      A: "This is the #1 rule of workplace savings: always contribute enough to get the full employer match. Think of it as part of your salary. By contributing 4%, your company gives you an extra 4% for free. It's a 100% return on your money instantly.",
      B: "You're putting your future self in a great position. By saving more than the match, you are supercharging compound interest—the process where your investment earnings start earning their own money. The more time your money has to grow, the more powerful this effect becomes.",
      C: "While more cash in your pocket today feels good, you're leaving free money on the table by skipping the employer match. You're also missing out on the most powerful force in finance: compound interest. Starting to invest early is the single biggest advantage you have.",
    },
  },
  {
    id: 3,
    imageKey: "TF5_illustration_budget_wisely",
    title: "The First Apartment Hunt",
    description: "Balances quality of life with the huge impact of housing on a budget.",
    prompt: "Time to get your own place! What's your move?",
    options: [
      { key: "A", label: "A cheap apartment with a long commute." },
      { key: "B", label: "A nicer, more expensive apartment close to work." },
      { key: "C", label: "Live with your parents for a year to save money." },
    ],
    feedback: {
      A: "You're making a trade-off. By accepting a longer commute, you're freeing up a significant amount of money that can be used for other goals, like investing or saving for a down payment. This is a powerful financial concept called opportunity cost: the value of the next-best thing you give up when you make a choice.",
      B: "You're choosing to spend more on a major life expense: housing. There's no right or wrong answer, but it's important to understand that every extra dollar spent on rent is a dollar that can't go toward other goals. This decision directly impacts your cash flow—the amount of money left over after your expenses are paid.",
      C: "This is a financial superpower. By temporarily eliminating your biggest potential expense, you have a unique opportunity to build a strong financial foundation. The money saved in one year could take someone else five or more years to accumulate, giving you a massive head start.",
    },
  },
  {
    id: 4,
    imageKey: "TF5_illustration_decision",
    title: "The “Windfall” Choice",
    description: "The core financial dilemma: paying down debt vs. investing vs. saving for emergencies.",
    prompt: "You get an unexpected $2,000 work bonus! What do you do with it?",
    options: [
      { key: "A", label: "Make a big extra payment on your student loans." },
      { key: "B", label: "Put it all into an S&P 500 index fund." },
      { key: "C", label: "Put it in a high-yield savings account as an emergency fund." },
    ],
    feedback: {
      A: "You're buying your future freedom. Paying down debt provides a guaranteed return on your money—you are guaranteed not to pay any more interest on the amount you paid off. This is a smart, risk-free way to improve your financial health.",
      B: "You're prioritizing long-term growth. Historically, investing in the stock market has provided higher returns over time than the interest rates on most student loans. This strategy uses risk to potentially build wealth faster, but it's not guaranteed.",
      C: "You're building your financial safety net. An emergency fund is the foundation of financial security. It's the money that protects you from life's surprises, like a car repair or a sudden job loss, and keeps you from having to take on debt when you're in a tough spot.",
    },
  },
];
