'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Mail, ArrowRight, Loader2, AlertCircle } from 'lucide-react';

interface WaitlistForm {
  email: string;
}

export default function Waitlist() {
  const [submitted, setSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WaitlistForm>();

  const onSubmit = async (data: WaitlistForm) => {
    setSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: data.email }),
      });

      const result = await response.json() as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit');
      }

      setSubmittedEmail(data.email);
      setSubmitted(true);
    } catch (error) {
      console.error('Waitlist submission error:', error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="waitlist" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto"
        >
          <Card className="border-0 bg-gradient-to-br from-gray-50 to-white shadow-sm">
            <CardContent className="p-8 lg:p-10 text-center">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      You&apos;re on the list!
                    </h3>
                    <p className="text-gray-500">
                      We&apos;ll notify you at{' '}
                      <span className="font-medium text-gray-700">
                        {submittedEmail}
                      </span>{' '}
                      when we launch.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-5">
                      <Mail className="w-8 h-8 text-indigo-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Join the Early Access Program.
                    </h3>
                    <p className="text-gray-500 mb-6">
                      Be the first to experience AI-powered outfit
                      recommendations. We&apos;re launching soon.
                    </p>

                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="flex flex-col sm:flex-row gap-3"
                    >
                      <div className="flex-1">
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          aria-label="Email address"
                          aria-invalid={!!errors.email}
                          className="h-12"
                          {...register('email', {
                            required: 'Email is required',
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: 'Please enter a valid email',
                            },
                          })}
                        />
                      </div>
                      <Button
                        type="submit"
                        size="lg"
                        className="gap-2 shrink-0"
                        disabled={submitting}
                      >
                        {submitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Joining...
                          </>
                        ) : (
                          <>
                            Notify Me
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </Button>
                    </form>

                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm mt-3 text-left"
                        role="alert"
                      >
                        {errors.email.message}
                      </motion.p>
                    )}

                    {submitError && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 text-red-500 text-sm mt-3 text-left bg-red-50 border border-red-100 rounded-lg p-3"
                        role="alert"
                      >
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        {submitError}
                      </motion.div>
                    )}

                    <p className="text-xs text-gray-400 mt-4">
                      No spam. Unsubscribe anytime.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
