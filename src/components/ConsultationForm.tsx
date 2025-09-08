import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useLanguage } from "@/contexts/LanguageContext"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"

interface ConsultationFormProps {
  onClose: () => void;
}

const ConsultationForm = ({ onClose }: ConsultationFormProps) => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form validation schema
  const formSchema = z.object({
    fullName: z.string().min(1, { message: t('requiredField') }),
    email: z.string().email({ message: t('invalidEmail') }),
    company: z.string().min(1, { message: t('requiredField') }),
    phone: z.string().optional(),
    wechat: z.string().optional(),
    serviceInterest: z.string().min(1, { message: t('requiredField') }),
    message: z.string().optional(),
  });

  type FormValues = z.infer<typeof formSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      phone: "",
      wechat: "",
      serviceInterest: "",
      message: "",
    },
  });

  // Service options extracted from ServicePortfolio
  const serviceOptions = [
    { value: "brand-incubation", label: t('brandIncubation') },
    { value: "integrated-marketing", label: t('integratedMarketing') },
    { value: "channel-expansion", label: t('channelExpansionService') },
    { value: "operational-support", label: t('operationalSupport') },
    { value: "other", label: t('serviceOther') },
  ];

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call - replace with actual implementation
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', values);
      
      toast({
        title: t('consultationSuccess'),
        description: t('consultationSuccess'),
      });
      
      form.reset();
      onClose();
    } catch (error) {
      toast({
        title: t('consultationError'),
        description: t('consultationError'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif font-bold mb-4">
          {t('consultationForm')}
        </h2>
        <p className="text-muted-foreground text-lg">
          {t('consultationFormSubtitle')}
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Full Name */}
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium">
                    {t('fullName')} *
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t('fullNamePlaceholder')}
                      {...field}
                      className="h-12 section-card border-border/50 focus:border-accent"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium">
                    {t('emailAddress')} *
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder={t('emailPlaceholder')}
                      {...field}
                      className="h-12 section-card border-border/50 focus:border-accent"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Company Name */}
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium">
                    {t('companyName')} *
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t('companyNamePlaceholder')}
                      {...field}
                      className="h-12 section-card border-border/50 focus:border-accent"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone Number */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium">
                    {t('phoneNumber')}
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder={t('phonePlaceholder')}
                      {...field}
                      className="h-12 section-card border-border/50 focus:border-accent"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* WeChat */}
            <FormField
              control={form.control}
              name="wechat"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium">
                    {t('wechat')}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t('wechatPlaceholder')}
                      {...field}
                      className="h-12 section-card border-border/50 focus:border-accent"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Service Interest */}
            <FormField
              control={form.control}
              name="serviceInterest"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium">
                    {t('serviceInterest')} *
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-12 section-card border-border/50 focus:border-accent">
                        <SelectValue placeholder={t('serviceInterestPlaceholder')} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {serviceOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Message */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-medium">
                  {t('messageRequirements')}
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={t('messagePlaceholder')}
                    className="min-h-[120px] section-card border-border/50 focus:border-accent resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full md:w-auto px-8 py-4 text-lg glow-effect"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  {t('submitting')}
                </>
              ) : (
                t('submitConsultation')
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ConsultationForm;