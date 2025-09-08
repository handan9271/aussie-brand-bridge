import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Keep all existing English content as is
    // Navigation
    overview: 'Overview',
    services: 'Services', 
    advantages: 'Advantages',
    contact: 'Contact',
    getStarted: 'Get Started',
    brandName: 'BrandBridge',
    
    // Hero
    heroTitle: 'Empowering Chinese Brands to Bridge into Australian Markets',
    heroSubtitle: 'Full-stack growth platform connecting Chinese consumer brands with Australian retail networks, KOL partnerships, and supply chain solutions.',
    heroTagline: 'Full-Stack Brand Growth Platform',
    heroMainTitle: 'We create Market Success',
    heroDescription: 'Dedicated to guiding China\'s emerging consumer brands into the Australian market',
    heroDetail: 'Unlike traditional overseas marketing providers, we deliver an integrated solution—covering market strategy, marketing execution, channel expansion, and supply chain operations—to support both market entry and scalable, sustainable growth.',
    exploreSolutions: 'Explore Our Solutions',
    viewSuccessStories: 'View Success Stories',
    
    // Company Overview
    companyOverview: 'Company Overview',
    ourMission: 'Our Mission',
    missionStatement: 'To enable outstanding Chinese brands to successfully penetrate and thrive in the Australian market.',
    fullStackPlatform: 'Full-Stack Brand Growth Platform',
    platformDescription: 'We are a full-stack brand growth platform, dedicated to guiding China\'s emerging consumer brands into the Australian market.',
    
    // Stats
    yearsRetail: 'Years in Australian Retail',
    endToEndSolutions: 'End-to-End Solutions',
    
    // Key points
    marketStrategy: 'Market Strategy',
    marketStrategyDesc: 'Research-driven positioning and localization',
    marketingExecution: 'Marketing Execution',
    marketingExecutionDesc: 'KOL campaigns and viral content strategy',
    channelExpansion: 'Channel Expansion', 
    channelExpansionDesc: 'Access to established retail networks',
    supplyChainOps: 'Supply Chain Operations',
    supplyChainOpsDesc: 'Integrated 3PL and logistics',
    
    // Differentiation Table
    ourDifferentiation: 'Our Differentiation',
    differentiationSubtitle: 'We move beyond "visibility" — we deliver tangible commercial results.',
    dimension: 'Dimension',
    typicalAgency: 'Typical Overseas Agency',
    ourApproach: 'Our Approach – Brand Growth Platform',
    
    // Table content
    scopeOfService: 'Scope of Service',
    scopeTypical: 'Ads & influencer campaigns only',
    scopeOurs: 'End-to-end: market research → strategy → marketing → channels → logistics & sales',
    
    valueFocus: 'Value Focus',
    valueFocusTypical: 'Exposure-driven',
    valueFocusOurs: 'Performance-driven growth with measurable business outcomes',
    
    channelAccess: 'Channel Access',
    channelAccessTypical: 'Limited retail network',
    channelAccessOurs: 'Over 10 years in Australian retail: Chinese supermarkets, convenience stores, IGA, Coles Local',
    
    supplyChainSupport: 'Supply Chain Support',
    supplyChainSupportTypical: 'None',
    supplyChainSupportOurs: 'Integrated 3PL cold storage, order fulfillment, and last-mile delivery',
    
    partnershipModel: 'Partnership Model',
    partnershipModelTypical: 'External vendor, easily replaced',
    partnershipModelOurs: 'Embedded partner: your local Marketing & Channel team, aligned for shared growth',
    
    revenueModel: 'Revenue Model',
    revenueModelTypical: 'Advertising fees',
    revenueModelOurs: 'Service fee + sales commission + channel rebates + value-added services',
    
    typicalAgencyMobile: 'Typical Agency:',
    ourApproachMobile: 'Our Approach:',
    
    // Key Advantages
    keyAdvantages: 'Key Advantages',
    advantagesSubtitle: 'Our unique combination of expertise, access, and proven methodologies sets us apart in the market.',
    
    retailExpertise: 'Retail Expertise',
    retailExpertiseDesc: 'Founders bring 10+ years of leadership in Australian retail chain management.',
    
    integratedAccess: 'Integrated Market Access',
    integratedAccessDesc: 'Strong presence across Chinese community channels, mainstream retailers, and cold-chain logistics—bridging awareness to shelf placement.',
    
    marketingExcellence: 'Marketing Excellence', 
    marketingExcellenceDesc: 'Expertise in TikTok, Xiaohongshu, Instagram campaigns, plus pop-up activations that drive measurable engagement.',
    
    scalableGrowth: 'Scalable Growth Model',
    scalableGrowthDesc: 'A proven, repeatable playbook — validate through pilot campaigns, then expand into full-scale retail distribution.',
    
    // Service Portfolio
    servicePortfolio: 'Service Portfolio',
    servicePortfolioSubtitle: 'Comprehensive solutions designed to take your brand from concept to market leadership in Australia.',
    
    brandIncubation: 'Brand Incubation & Localization',
    brandIncubationItems: [
      'Market research & consumer insights',
      'Product positioning & localized packaging', 
      'Regulatory compliance & import facilitation'
    ],
    
    integratedMarketing: 'Integrated Marketing & Promotion',
    integratedMarketingItems: [
      'KOL/KOC engagement & paid social media campaigns',
      'Pop-up events & trade show execution',
      'IP collaborations & viral content strategy'
    ],
    
    channelExpansionService: 'Channel Expansion',
    channelExpansionItems: [
      'Chinese supermarkets, IGA, Foodworks',
      'Convenience stores, F&B, and independent retailers'
    ],
    
    operationalSupport: 'Operational Support',
    operationalSupportItems: [
      '3PL warehousing, logistics assessment & coordination',
      'Local company formation & tax advisory',
      'HR guidance and team setup support'
    ],
    
    // Why Work With Us
    whyWorkWithUs: 'Why Work With Us',
    
    strategicApproach: 'Strategic, ROI-Focused Approach',
    strategicApproachDesc: 'We prioritize measurable outcomes over vanity metrics.',
    
    localExpertise: 'Local Market Expertise',
    localExpertiseDesc: 'Deep knowledge of Australian retail operations and consumer behavior.',
    
    endToEndExecution: 'End-to-End Execution',
    endToEndExecutionDesc: 'From strategy to on-the-ground implementation, we remove friction for your team.',
    
    alignedIncentives: 'Aligned Growth Incentives',
    alignedIncentivesDesc: 'Our performance-based model ensures that your success drives ours.',
    
    // CTA Section
    readyToScale: 'Ready to scale your brand in Australia?',
    ctaDescription: 'Get in touch today and let\'s make your market entry seamless and impactful.',
    scheduleConsultation: 'Schedule Consultation',
    downloadPortfolio: 'Download Our Portfolio',
    
    // Footer
    footerDescription: 'Your trusted partner for entering and scaling in the Australian market.',
    servicesTitle: 'Services',
    brandIncubationLink: 'Brand Incubation',
    marketingPromotionLink: 'Marketing & Promotion',
    channelExpansionLink: 'Channel Expansion', 
    operationalSupportLink: 'Operational Support',
    companyTitle: 'Company',
    aboutUs: 'About Us',
    ourAdvantages: 'Our Advantages',
    successStories: 'Success Stories',
    careers: 'Careers',
    contactTitle: 'Contact',
    sydneyAustralia: 'Brisbane, Australia',
    melbourneAustralia: 'Melbourne, Australia',
    copyright: '© 2024 BrandBridge. All rights reserved.',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    
    // Consultation Form
    consultationForm: 'Consultation Form',
    consultationFormSubtitle: 'Let\'s discuss how we can help scale your brand in Australia',
    fullName: 'Full Name',
    fullNamePlaceholder: 'Enter your full name',
    emailAddress: 'Email Address', 
    emailPlaceholder: 'Enter your email address',
    companyName: 'Company Name',
    companyNamePlaceholder: 'Enter your company name',
    phoneNumber: 'Phone Number',
    phonePlaceholder: 'Enter your phone number',
    wechat: 'WeChat',
    wechatPlaceholder: 'Enter your WeChat ID',
    serviceInterest: 'Service Interest',
    serviceInterestPlaceholder: 'Select a service you\'re interested in',
    messageRequirements: 'Message / Requirements',
    messagePlaceholder: 'Tell us about your goals and requirements...',
    submitConsultation: 'Submit Consultation Request',
    submitting: 'Submitting...',
    consultationSuccess: 'Thank you for your interest! We\'ll contact you within 24 hours.',
    consultationError: 'Something went wrong. Please try again.',
    requiredField: 'This field is required',
    invalidEmail: 'Please enter a valid email address',
    serviceOther: 'Other',
  },
  zh: {
    // Chinese translations based on your provided content
    // Navigation
    overview: '公司概述',
    services: '业务版块',
    advantages: '核心优势',
    contact: '联系我们',
    getStarted: '立即开始',
    brandName: 'BrandBridge',
    
    // Hero - adapting your content
    heroTitle: '助力中国品牌桥接澳大利亚市场',
    heroSubtitle: '我们是一家专注于协助中国新锐消费品牌进入澳大利亚市场的全链路品牌增长平台。',
    heroTagline: '全链路品牌增长平台',
    heroMainTitle: '我们创造市场成功',
    heroDescription: '专注于协助中国新锐消费品牌进入澳大利亚市场',
    heroDetail: '不同于只提供广告投放或KOL合作的传统海外营销公司，我们整合市场策略、营销执行、渠道拓展和供应链运营，为品牌提供从市场进入到规模化增长的端到端解决方案，助力品牌实现可持续商业成功。',
    exploreSolutions: '探索我们的解决方案',
    viewSuccessStories: '查看成功案例',
    
    // Company Overview - using your provided Chinese content
    companyOverview: '公司概述', 
    ourMission: '我们的使命',
    missionStatement: '帮助优秀的中国品牌在澳大利亚实现真正的市场落地与长期稳健发展。',
    fullStackPlatform: '全链路品牌增长平台',
    platformDescription: '不同于只提供广告投放或KOL合作的传统海外营销公司，我们整合市场策略、营销执行、渠道拓展和供应链运营，为品牌提供从市场进入到规模化增长的端到端解决方案，助力品牌实现可持续商业成功。',
    
    // Stats
    yearsRetail: '年澳洲零售经验',
    endToEndSolutions: '端到端解决方案',
    
    // Key points - from your Chinese content
    marketStrategy: '市场策略',
    marketStrategyDesc: '市场调研与消费者洞察、产品定位与本地化设计、法规合规与进口解决方案',
    marketingExecution: '整合营销推广',
    marketingExecutionDesc: 'KOL/KOC种草与社媒广告投放、快闪活动与品牌展会执行、IP联名与话题策划',
    channelExpansion: '渠道拓展',
    channelExpansionDesc: '华人超市、IGA/Foodworks等主流超市、便利店、餐饮及独立零售渠道',
    supplyChainOps: '运营支持',
    supplyChainOpsDesc: '3PL仓储、物流考察与协调、当地公司注册与税务咨询、人力资源及团队搭建辅导',
    
    // Differentiation Table - from your provided Chinese content
    ourDifferentiation: '我们的差异化',
    differentiationSubtitle: '我们不仅制造曝光，更驱动实际增长。',
    dimension: '对比维度',
    typicalAgency: '普通海外营销公司',
    ourApproach: '我们（品牌操盘平台）',
    
    // Table content - based on your provided differentiation table
    scopeOfService: '服务范围',
    scopeTypical: '仅负责广告投放、KOL合作',
    scopeOurs: '全链路服务：市场调研 → 品牌策略 → 营销执行 → 渠道拓展 → 仓储物流与销售闭环',
    
    valueFocus: '价值定位',
    valueFocusTypical: '注重曝光和声量',
    valueFocusOurs: '聚焦销售转化与增长，实现可衡量的商业成果',
    
    channelAccess: '渠道能力',
    channelAccessTypical: '零售资源有限',
    channelAccessOurs: '深耕澳洲零售10+年，覆盖华人超市、便利店、IGA、Coles Local等主流渠道',
    
    supplyChainSupport: '供应链支持',
    supplyChainSupportTypical: '无相关服务',
    supplyChainSupportOurs: '整合3PL冷链仓储、拆单和配送，保障货品高效到店',
    
    partnershipModel: '合作关系',
    partnershipModelTypical: '外部服务商，易替代',
    partnershipModelOurs: '成为品牌在澳洲的"市场部+渠道部"，深度协同，共享成长',
    
    revenueModel: '收益模式',
    revenueModelTypical: '广告费结算',
    revenueModelOurs: '固定服务费 + 销售提成 + 渠道返点 + 增值服务，实现利益捆绑',
    
    typicalAgencyMobile: '普通海外营销公司：',
    ourApproachMobile: '我们的方式：',
    
    // Key Advantages - from your provided Chinese content
    keyAdvantages: '核心优势',
    advantagesSubtitle: '我们的独特优势组合让我们在市场中脱颖而出。',
    
    retailExpertise: '零售基因深厚',
    retailExpertiseDesc: '创始团队拥有10+年澳洲零售连锁管理经验，熟悉超市、便利店、餐饮和分销体系。',
    
    integratedAccess: '资源整合能力强',
    integratedAccessDesc: '覆盖华人市场、主流零售和冷链物流，打通"曝光—上架—销售"的关键环节。',
    
    marketingExcellence: '营销策划能力专业',
    marketingExcellenceDesc: '擅长运用TikTok、小红书、Instagram和线下快闪活动，打造高效营销闭环。',
    
    scalableGrowth: '可复制的增长打法',
    scalableGrowthDesc: '通过小规模市场验证，快速复制到更大渠道，实现持续增长。',
    
    // Service Portfolio - from your provided Chinese content
    servicePortfolio: '业务版块',
    servicePortfolioSubtitle: '为品牌提供从市场进入到规模化增长的端到端解决方案。',
    
    brandIncubation: '品牌孵化与本地化落地',
    brandIncubationItems: [
      '市场调研与消费者洞察',
      '产品定位与本地化设计',
      '法规合规与进口解决方案'
    ],
    
    integratedMarketing: '整合营销推广',
    integratedMarketingItems: [
      'KOL/KOC种草与社媒广告投放',
      '快闪活动与品牌展会执行',
      'IP联名与话题策划'
    ],
    
    channelExpansionService: '渠道拓展',
    channelExpansionItems: [
      '华人超市、IGA/Foodworks等主流超市',
      '便利店、餐饮及独立零售渠道'
    ],
    
    operationalSupport: '运营支持',
    operationalSupportItems: [
      '3PL仓储、物流考察与协调',
      '当地公司注册与税务咨询',
      '人力资源及团队搭建辅导'
    ],
    
    // Why Work With Us - from your provided Chinese content
    whyWorkWithUs: '为什么选择我们',
    
    strategicApproach: '战略导向，聚焦ROI',
    strategicApproachDesc: '以数据和结果为核心，衡量每一步投入产出。',
    
    localExpertise: '深耕本地市场',
    localExpertiseDesc: '精通澳洲零售生态和消费者行为。',
    
    endToEndExecution: '端到端执行',
    endToEndExecutionDesc: '从战略到落地执行，减少沟通和运营摩擦。',
    
    alignedIncentives: '利益绑定',
    alignedIncentivesDesc: '以业绩为导向的合作模式，真正做到共赢成长。',
    
    // CTA Section
    readyToScale: '准备好在澳洲拓展您的品牌了吗？',
    ctaDescription: '立即联系我们，让您的市场进入更高效、更有影响力。',
    scheduleConsultation: '预约咨询',
    downloadPortfolio: '下载案例集',
    
    // Footer
    footerDescription: '您在澳大利亚市场进入和扩张的可信合作伙伴。',
    servicesTitle: '服务',
    brandIncubationLink: '品牌孵化',
    marketingPromotionLink: '营销推广',
    channelExpansionLink: '渠道拓展',
    operationalSupportLink: '运营支持',
    companyTitle: '公司',
    aboutUs: '关于我们',
    ourAdvantages: '我们的优势',
    successStories: '成功案例',
    careers: '招聘',
    contactTitle: '联系方式',
    sydneyAustralia: '澳大利亚布里斯班',
    melbourneAustralia: '澳大利亚墨尔本',
    copyright: '© 2024 BrandBridge. 版权所有。',
    privacyPolicy: '隐私政策',
    termsOfService: '服务条款',
    
    // Consultation Form
    consultationForm: '咨询表单',
    consultationFormSubtitle: '让我们讨论如何助力您的品牌在澳洲市场成功',
    fullName: '姓名',
    fullNamePlaceholder: '请输入您的姓名',
    emailAddress: '邮箱地址',
    emailPlaceholder: '请输入您的邮箱地址',
    companyName: '公司名称',
    companyNamePlaceholder: '请输入您的公司名称',
    phoneNumber: '电话号码',
    phonePlaceholder: '请输入您的电话号码',
    wechat: '微信号',
    wechatPlaceholder: '请输入您的微信号',
    serviceInterest: '感兴趣的服务',
    serviceInterestPlaceholder: '请选择您感兴趣的服务',
    messageRequirements: '留言 / 需求',
    messagePlaceholder: '请告诉我们您的目标和需求...',
    submitConsultation: '提交咨询申请',
    submitting: '提交中...',
    consultationSuccess: '感谢您的关注！我们将在24小时内与您联系。',
    consultationError: '出现错误，请重试。',
    requiredField: '此字段为必填项',
    invalidEmail: '请输入有效的邮箱地址',
    serviceOther: '其他',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'zh')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const t = (key: string): string => {
    const currentTranslations = translations[language];
    return (currentTranslations as any)[key] || key;
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};