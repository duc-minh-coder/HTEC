import ClubInfo from '../components/register/ClubInfo';
import RegistrationForm from '../components/register/RegistrationForm';
import { motion } from 'motion/react';

export default function RegisterPage() {
  return (
    <div className="bg-slate-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid lg:grid-cols-2 gap-20 items-start"
        >
          {/* Left Column: Info */}
          <div className="lg:sticky lg:top-32">
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
