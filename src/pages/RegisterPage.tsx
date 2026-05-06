"use client";

import ClubInfo from '../components/register/ClubInfo';
import RegistrationForm from '../components/register/RegistrationForm';
import { motion } from 'framer-motion';

export default function RegisterPage() {
  return (
    <div className="bg-slate-50 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24">
      <div className="container-wide">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-start"
        >
          {/* Left Column: Info */}
          <div className="lg:sticky lg:top-28">
            <ClubInfo />
          </div>

          {/* Right Column: Form */}
          <div>
            <RegistrationForm />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
