import React, { useState } from 'react';
import PersonalInfo from './steps/PersonalInfo';
import BillingAddress from './steps/BillingAddress';
import Payment from './steps/Payment';

const PERSONAL_INFO_STEP = 'PERSONAL_INFO_STEP';
const BILLING_ADDRESS_STEP = 'BILLING_STEP';
const PAYMENT_STEP = 'PAYMENT_STEP'

const Wizard = ({
}) => {
  const [step, setStep] = useState(PERSONAL_INFO_STEP);

  const goTo = (step) => () => setStep(step);

  const props = {
    [PERSONAL_INFO_STEP]: {
      onNext: goTo(BILLING_ADDRESS_STEP)
    },
    [BILLING_ADDRESS_STEP]: {
      onNext: goTo(PAYMENT_STEP)
    },
    [PAYMENT_STEP]: {
      onSave: goTo(PERSONAL_INFO_STEP)
    },
  };

  const currentStep = {
    [PERSONAL_INFO_STEP]: () => <PersonalInfo {...props[step]}/>,
    [BILLING_ADDRESS_STEP]: () => <BillingAddress {...props[step]}/>,
    [PAYMENT_STEP]: () => <Payment {...props[step]}/>,
  };

  return (
    <>
    <h2 className="text-center">Complete your order!</h2>
    <div className="row">
      <div className="col-md-3">
        <ul className="list-group">
          <li className={`list-group-item ${step === PERSONAL_INFO_STEP ? 'active' : ''}`}>Personal Information</li>
          <li className={`list-group-item ${step === BILLING_ADDRESS_STEP ? 'active' : ''} `}>Billing Address</li>
          <li className={`list-group-item ${step === PAYMENT_STEP ? 'active' : ''}`}>Payment Information</li>
        </ul>
      </div>

      <div className="col-md-9">
        {currentStep[step]()}
      </div>
    </div>
    </>
  );
}

export default Wizard
