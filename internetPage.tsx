'use client';
import CommonHeroSection from '@/app/modules/CommonModule/CommonHeroSection';
import Addons from '@/app/modules/InternetPage/Addons';
import EasyWayToSignUp from '@/app/modules/InternetPage/EasyWayToSignUp';

import InternetMap from '@/app/modules/InternetPage/InternetMap';
import SelectPlan from '@/app/modules/InternetPage/SelectPlan';
import Faqs from '@/app/modules/LandingPage/Faqs';
import internetanimation from '../../../../assets/lottie/internetheroanimation.json';
import { Widget } from '@typeform/embed-react';
import React, { useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import CommonSliderHeading from '@/app/modules/Corporate/CommonSlider/CommonSliderHeading';


const processedEncodeToBase64 = (data: string) => {
  let base64 = Buffer.from(data, 'utf-8').toString('base64');
  base64 = base64.replace(/\+/g, '-').replace(/\//g, '_');
  base64 = base64.replace(/=+$/, '');
  return base64;
};

function InternetPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const cityname = searchParams.get('city') || '';
  const cityvalue = searchParams.get('value') || '';
  const selectedCityName = cityname; 
  const selectedCitySlug = cityvalue;

  
  const queryParams = new URLSearchParams({
    [`${processedEncodeToBase64('selectedCitySlug')}`]: processedEncodeToBase64(selectedCitySlug),
    [`${processedEncodeToBase64('selectedCityName')}`]: processedEncodeToBase64(selectedCityName),
  }).toString();
  
  const targetUrl = `https://customer.nayatel.com/CP/signup/selectArea?${queryParams}`;

  console.log("i am learning gitkraken")
  
  


  console.log("Very good work")
  // Use useEffect to avoid navigating during the render cycle
  useEffect(() => {
    if (cityname.length === 0) {
      router.push('/city-selection-internet');
    }
  }, [searchParams, router]);

  const subheading = `Get fast and reliable fiber internet from the leading internet service provider in ${cityname}`;

  const ButtonText = 'Sign up now';
  const faq1 = [
    {
      title: "How do I sign up for Nayatel's services?",
      description:
        'You can sign up to our internet by yourself through online sign up. After checking if your area is available, you can select your preferred services, and our team will take care of the rest.',
    },
    {
      title:
        'What makes Nayatel’s fiber internet different from other providers?',
      description:
        ' Nayatel’s fiber internet uses FTTH technology, offering unmatched speed, reliability, and performance. We pride ourselves on providing 24/7 dedicated support, ensuring a superior internet experience. ',
    },
    {
      title: 'What are the connection charges of Nayatel? ',
      description:
        'Nayatel’s connection charges depend on your selected package, added services and location. For details about connection and hardware charges, visit our "Hardware" page or approach our sales team at 1441.',
    },
  ];

  const faq2 = [
    {
      title: 'Is Nayatel available in my area?',
      description: `To see if we’re available in your location, you can check your area on our <a href="https://nayatel.com/coverage-areas?city=${cityname}" style="color: blue; text-decoration: underline;" target="_blank" rel="noopener noreferrer">coverage areas page</a> .`,
    },
    {
      title:
        'Are there any connection charges for upgrading or downgrading my internet package?',
      description:
        'No, there are no additional connection charges for changing your internet package. Your new package will be billed on a pro rata basis.',
    },
    {
      title: 'Can I upgrade my package after signing up?',
      description:
        'Yes, you can easily upgrade your package at any time through your My Nayatel account or by contacting our customer support.',
    },
  ];
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='flex flex-col mt-[-85px] bg-white gap-[70px] md:gap-[100px] pb-[70px] sm:pb-[100px] '>
        <CommonHeroSection
          paddingbottomleft={60}
          paddingbottomright={70}
          paddingright={70}
          itemPosition='center'
          titleFirstPart='High-speed fiber'
          titleFirstColor='--charcol'
          titleColoredPart='internet packages'
          titleColor='--blue'
          titleLastPart={`in ${cityname}`}
          beforePriceText=''
          price=''
          afterPriceText=''
          subheading={subheading}
          subheadingColor='--dark-grey'
          ButtonText={ButtonText}
          href={targetUrl}
          rel='noopener noreferrer'
          target='_blank'
          bgColor='nil'
          bgImage='/Images/backgroundinternet.svg'
          lottiePath={internetanimation}
          ButtonGoogleEvent={`${cityname}Home_BannerCTA_SignUpNow`}
        />

        <SelectPlan selectedCity={cityname} />

        <Addons selectedCity={cityname} />

        <EasyWayToSignUp selectedCity={cityname} />
        <InternetMap selectedCity={cityname} />
        <div>
          <MaxWidthWrapper>
            <div className='px-0 md:px-[9rem]'>
              <CommonSliderHeading
                heading="Let's get in touch!"
                TextPosition='center'
                headingFontSize='h3'
                headingFontColor='charcol'
                subheading='We’re here to help you with any questions, feedback, or support you may need. Fill out the form, and our team will get back to you shortly.'
                subheadingFontSize='h4'
                subheadingFontColor='charcol'
              />
            </div>
          </MaxWidthWrapper>
          <Widget
            id={'xkm3kdRB'}
            style={{ width: '100%', height: '500px' }}
            className='my-form'
          />
        </div>

        <Faqs faq1={faq1} faq2={faq2} headingColor='--charcol' />
      </div>
    </Suspense>
  );
}

export default InternetPage;