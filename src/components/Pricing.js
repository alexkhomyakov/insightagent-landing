import React from 'react';

const Pricing = ({ setShowModal }) => {
  const corePlans = [
    {
      name: 'Starter',
      price: '$499',
      period: 'per month',
      description: 'Perfect for small teams and startups. Includes all essential features to get started with AI-powered interviews and seamless integration.',
      features: [
        '1,000 minutes included',
        '$0.60/min overage',
        'Full API access',
        'Webhook support'
      ]
    },
    {
      name: 'Growth',
      price: '$999',
      period: 'per month',
      description: 'Ideal for growing businesses that need more minutes, advanced integrations, and priority support. Scale your operations with confidence.',
      features: [
        '2,500 minutes included',
        '$0.50/min overage',
        'Priority support',
        'CRM/ATS webhook integrations'
      ],
      popular: true
    },
    {
      name: 'Scale',
      price: '$2,499',
      period: 'per month',
      description: 'For scaling operations that require advanced analytics, dedicated support, and higher usage limits. Unlock the full power of InsightAgent.',
      features: [
        '7,000 minutes included',
        '$0.40/min overage',
        'Advanced analytics access',
        'Dedicated success manager'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      description: 'For large organizations with custom needs, compliance requirements, and white-label solutions. Tailored onboarding and support.',
      features: [
        'Custom minutes & usage tiers',
        'SLA, SSO, and audit logging',
        'AI persona tuning',
        'White-label deployment'
      ]
    }
  ];

  const addOns = [
    {
      name: 'Multilingual AI Relay',
      price: '+ $0.10/min',
      description: 'Supports 29 languages in real time for global interviews and research.'
    },
    {
      name: 'AI Summary & Tagging',
      price: '+ $1.50 per interview',
      description: 'Get structured highlights, topic tags, and sentiment analysis for every interview.'
    },
    {
      name: 'Compliance Layer',
      price: '+ $250/month',
      description: 'Role-based access, data retention policies, and audit logs for secure, compliant operations.'
    },
    {
      name: 'Custom AI Persona / Interview Flow',
      price: 'Custom',
      description: 'Tailor your agent\'s tone, script, and behavior to your brand and workflow.'
    }
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Flexible, scalable pricing
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Built for platforms, expert networks, and enterprise integrations.
            Only pay for what you use. No seats. No overhead. Full API access.
          </p>
        </div>

        {/* Core Plans */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">Core Plans</h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {corePlans.map((plan) => (
              <div
                key={plan.name}
                className={`flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 ${
                  plan.popular ? 'relative' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex rounded-full bg-primary px-4 py-1 text-sm font-semibold text-white">
                      Most popular
                    </span>
                  </div>
                )}
                <div>
                  <div className="flex items-center justify-between gap-x-4">
                    <h3 className="text-lg font-semibold leading-8 text-gray-900">{plan.name}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-gray-600 min-h-[64px]">{plan.description}</p>
                  {plan.name === 'Enterprise' ? (
                    <p className="mt-6 flex items-baseline gap-x-1">
                      <span className="text-4xl font-bold tracking-tight text-gray-900">Custom</span>
                      <span className="text-sm font-semibold leading-6 text-gray-600 whitespace-nowrap">contact us</span>
                    </p>
                  ) : (
                    <p className="mt-6 flex items-baseline gap-x-1">
                      <span className="text-4xl font-bold tracking-tight text-gray-900">{plan.price}</span>
                      <span className="text-sm font-semibold leading-6 text-gray-600">{plan.period}</span>
                    </p>
                  )}
                  <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-primary" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  type="button"
                  onClick={() => setShowModal(true)}
                  className={`mt-8 block w-full rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    plan.popular
                      ? 'bg-primary text-white hover:bg-primary/90 focus-visible:outline-primary'
                      : 'bg-primary/10 text-primary hover:bg-primary/20 focus-visible:outline-primary'
                  }`}
                >
                  Get started
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Optional Add-Ons */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">Optional Add-Ons</h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {addOns.map((addon) => (
              <div
                key={addon.name}
                className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10"
              >
                <div>
                  <h3 className="text-lg font-semibold leading-8 text-gray-900 min-h-[48px]">{addon.name}</h3>
                  <p className="mt-4 text-sm leading-6 text-gray-600 min-h-[48px]">{addon.description}</p>
                  <p className="mt-6 text-2xl font-bold tracking-tight text-primary">{addon.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing; 