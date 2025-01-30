import React from 'react'
import logo from "../assets/logo.jpg"

const Footer = () => {
  return (
    <div>
      <div className="mt-8 bg-gradient-to-r from-gray-900 to-black pt-9">
  <div className="mx-auto w-full max-w-[1166px] px-4 xl:px-0">
    <div className="flex flex-col justify-between sm:px-[18px] md:flex-row md:px-10">
      <div className="md:w-[316px]">
       
      <div className="w-[200px] h-[200px] rounded-full overflow-hidden">
  <img src={logo} className="w-full h-full object-cover transform scale-110 translate-y-2 translate-x-0.5" />
</div>
<br></br>
<div class="flex items-center gap-4">
  <div class="social-button">
    <button class="relative w-12 h-12 rounded-full group">
      <div
        class="floater w-full h-full absolute top-0 left-0 bg-violet-400 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"
      ></div>
      <div
        class="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-violet-400 rounded-full"
      >
        <a href='' target='_blank'>
        <svg
          fill="none"
          viewBox="0 0 22 22"
          height="22"
          width="22"
          xmlns="http://www.w3.org/2000/svg"
          
        >
          <path
            d="M21.94 6.46809C21.8884 5.2991 21.6994 4.49551 21.4285 3.79911C21.1492 3.05994 20.7194 2.39818 20.1564 1.84802C19.6062 1.28932 18.9401 0.855163 18.2094 0.580194C17.5091 0.309437 16.7096 0.120336 15.5407 0.0688497C14.363 0.0128932 13.9891 0 11.0022 0C8.01527 0 7.64141 0.0128932 6.46808 0.064466C5.29914 0.116039 4.49551 0.305225 3.79932 0.57581C3.05994 0.855163 2.39818 1.28494 1.84802 1.84802C1.28932 2.39813 0.855377 3.06428 0.580193 3.7949C0.309437 4.49551 0.120379 5.2948 0.0688496 6.4637C0.0129362 7.64141 0 8.01527 0 11.0022C0 13.9891 0.0129362 14.363 0.0644659 15.5363C0.116039 16.7053 0.305225 17.5089 0.576025 18.2053C0.855377 18.9444 1.28932 19.6062 1.84802 20.1564C2.39818 20.7151 3.06432 21.1492 3.79494 21.4242C4.49547 21.6949 5.29476 21.884 6.46391 21.9355C7.63702 21.9873 8.0111 22 10.998 22C13.9849 22 14.3588 21.9873 15.5321 21.9355C16.7011 21.884 17.5047 21.695 18.2009 21.4242C18.9321 21.1415 19.5961 20.7091 20.1505 20.1548C20.7048 19.6005 21.1373 18.9365 21.42 18.2053C21.6906 17.5047 21.8798 16.7052 21.9314 15.5363C21.9829 14.363 21.9958 13.9891 21.9958 11.0022C21.9958 8.01527 21.9914 7.64137 21.94 6.46809ZM19.9588 15.4503C19.9114 16.5248 19.731 17.105 19.5805 17.4918C19.2109 18.4502 18.4502 19.2109 17.4918 19.5805C17.105 19.731 16.5206 19.9114 15.4503 19.9586C14.29 20.0103 13.942 20.023 11.0066 20.023C8.07118 20.023 7.71881 20.0103 6.56259 19.9586C5.48816 19.9114 4.90796 19.731 4.52117 19.5805C4.04425 19.4043 3.61014 19.1249 3.25772 18.7596C2.89242 18.4029 2.61306 17.9731 2.43677 17.4961C2.28635 17.1094 2.10589 16.5248 2.05874 15.4547C2.007 14.2943 1.99428 13.9461 1.99428 11.0107C1.99428 8.07535 2.007 7.72298 2.05874 6.56698C2.10589 5.49254 2.28635 4.91235 2.43677 4.52555C2.61306 4.04842 2.89241 3.61439 3.26211 3.26189C3.61865 2.89658 4.04842 2.61723 4.52555 2.44115C4.91235 2.29073 5.49692 2.11023 6.56697 2.06291C7.72736 2.01134 8.07556 1.99844 11.0107 1.99844C13.9505 1.99844 14.2985 2.01134 15.4547 2.06291C16.5292 2.11027 17.1093 2.29069 17.4961 2.44111C17.9731 2.61723 18.4072 2.89658 18.7596 3.26189C19.1249 3.61865 19.4042 4.04842 19.5805 4.52555C19.731 4.91235 19.9114 5.49671 19.9587 6.56698C20.0103 7.72736 20.0232 8.07535 20.0232 11.0107C20.0232 13.9461 20.0104 14.29 19.9588 15.4503Z"
            class="group-hover:fill-[#171543] fill-white duration-300"
          ></path>
          <path
            d="M11.0026 5.35054C7.88252 5.35054 5.35107 7.88182 5.35107 11.0021C5.35107 14.1223 7.88252 16.6536 11.0026 16.6536C14.1227 16.6536 16.6541 14.1223 16.6541 11.0021C16.6541 7.88182 14.1227 5.35054 11.0026 5.35054ZM11.0026 14.668C8.97844 14.668 7.33654 13.0264 7.33654 11.0021C7.33654 8.97774 8.97844 7.33609 11.0025 7.33609C13.0269 7.33609 14.6685 8.97774 14.6685 11.0021C14.6685 13.0264 13.0268 14.668 11.0026 14.668ZM18.1971 5.12706C18.1971 5.85569 17.6063 6.44646 16.8775 6.44646C16.1489 6.44646 15.5581 5.85569 15.5581 5.12706C15.5581 4.39833 16.1489 3.80774 16.8775 3.80774C17.6063 3.80774 18.1971 4.39829 18.1971 5.12706Z"
            class="group-hover:fill-[#171543] fill-white duration-300"
          ></path>
        </svg>
        </a>
      </div>
    </button>
  </div>
  <div class="social-button">
    <button class="relative w-12 h-12 rounded-full group">
      <div
        class="floater w-full h-full absolute top-0 left-0 bg-black rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"
      ></div>
      <div
        class="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-black rounded-full"
      >
        <svg
          fill="none"
          viewBox="0 0 22 22"
          height="22"
          width="22"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.8115 9.3155L20.8253 0H18.9263L11.9679 8.08852L6.41015 0H0L8.40433 12.2313L0 22H1.89914L9.24745 13.4583L15.1168 22H21.5269L12.811 9.3155H12.8115ZM10.2103 12.339L9.35878 11.1211L2.58343 1.42964H5.5004L10.9682 9.25094L11.8197 10.4689L18.9272 20.6354H16.0102L10.2103 12.3395V12.339Z"
            class="group-hover:fill-[#171543] fill-white duration-300"
          ></path>
        </svg>
      </div>
    </button>
  </div>
  <div class="social-button">
    <button class="relative w-12 h-12 rounded-full group">
      <div
        class="floater w-full h-full absolute top-0 left-0 bg-blue-500 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"
      ></div>
      <div
        class="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-blue-500 rounded-full"
      >
        <a href='' target='_blank'>
        <svg
          fill="none"
          viewBox="0 0 13 22"
          height="22"
          width="13"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.71289 22H4.1898C3.60134 22 3.12262 21.5213 3.12262 20.9328V12.9863H1.06717C0.478672 12.9863 0 12.5074 0 11.9191V8.514C0 7.9255 0.478672 7.44683 1.06717 7.44683H3.12262V5.74166C3.12262 4.05092 3.6535 2.6125 4.65773 1.58207C5.6665 0.546992 7.07627 0 8.7346 0L11.4214 0.00438281C12.0089 0.00537109 12.4868 0.484086 12.4868 1.07151V4.23311C12.4868 4.82157 12.0083 5.30028 11.4199 5.30028L9.61091 5.30093C9.05919 5.30093 8.91868 5.41153 8.88864 5.44543C8.83914 5.50172 8.78023 5.66062 8.78023 6.09954V7.4467H11.284C11.4725 7.4467 11.6551 7.49319 11.812 7.58076C12.1506 7.76995 12.3611 8.12762 12.3611 8.51417L12.3597 11.9193C12.3597 12.5074 11.881 12.9861 11.2926 12.9861H8.78019V20.9328C8.78023 21.5213 8.30139 22 7.71289 22ZM4.41233 20.7103H7.49031V12.4089C7.49031 12.016 7.81009 11.6964 8.20282 11.6964H11.07L11.0712 8.73662H8.20265C7.80991 8.73662 7.49031 8.41706 7.49031 8.02411V6.09959C7.49031 5.59573 7.54153 5.0227 7.92185 4.59198C8.38144 4.07133 9.10568 4.01126 9.61056 4.01126L11.1971 4.01057V1.29375L8.73357 1.28975C6.06848 1.28975 4.41238 2.99574 4.41238 5.7417V8.02407C4.41238 8.4168 4.09277 8.73658 3.7 8.73658H1.28975V11.6964H3.7C4.09277 11.6964 4.41238 12.016 4.41238 12.4089L4.41233 20.7103Z"
            class="group-hover:fill-[#171543] fill-white duration-300"
          ></path>
        </svg>
        </a>
      </div>
    </button>
  </div>
  <div class="social-button">
    <button class="relative w-12 h-12 rounded-full group">
      <div
        class="floater w-full h-full absolute top-0 left-0 bg-red-400 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"
      ></div>
      <div
        class="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-red-400 rounded-full"
      >
        <svg
          fill="none"
          viewBox="0 0 30 22"
          height="22"
          width="30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.9945 9.70081L12.5775 6.18974C12.2085 5.98783 11.7724 5.99538 11.4108 6.20965C11.0489 6.42415 10.833 6.80311 10.833 7.22372V14.1857C10.833 14.6043 11.0476 14.9826 11.407 15.1973C11.5947 15.3094 11.8028 15.3657 12.0113 15.3657C12.2064 15.3654 12.3984 15.3166 12.57 15.2237L18.9872 11.7731C19.1742 11.6726 19.3305 11.5235 19.4397 11.3415C19.5489 11.1596 19.6069 10.9515 19.6077 10.7393C19.6086 10.527 19.552 10.3184 19.4441 10.1356C19.3362 9.95283 19.1808 9.80259 18.9945 9.70081ZM12.5352 13.3099V8.10662L17.3312 10.7308L12.5352 13.3099Z"
            class="group-hover:fill-[#171543] fill-white duration-300"
          ></path>
          <path
            d="M28.8325 5.19239L28.8312 5.17912C28.8065 4.94533 28.5617 2.86581 27.5508 1.80806C26.3822 0.56396 25.0574 0.412829 24.4203 0.340384C24.3722 0.335071 24.3241 0.329304 24.276 0.323081L24.2253 0.317805C20.3854 0.0385769 14.5862 0.000453846 14.5282 0.000226923L14.5231 0L14.518 0.000226923C14.4599 0.000453846 8.66074 0.0385769 4.7862 0.317805L4.73503 0.323081C4.69379 0.328641 4.64834 0.333747 4.59893 0.339533C3.96916 0.412149 2.65857 0.563563 1.48674 1.8526C0.523851 2.89905 0.245531 4.93404 0.216938 5.16272L0.213648 5.19239C0.204968 5.28969 0 7.60572 0 9.93077V12.1042C0 14.4293 0.204968 16.7453 0.213648 16.8428L0.21518 16.8574C0.239801 17.0875 0.484424 19.1289 1.49071 20.1871C2.58947 21.3895 3.97869 21.5486 4.72595 21.6341C4.84407 21.6476 4.94578 21.6592 5.01511 21.6714L5.08228 21.6807C7.29943 21.8916 14.2509 21.9955 14.5456 21.9998L14.5545 22L14.5634 21.9998C14.6214 21.9995 20.4204 21.9614 24.2604 21.6822L24.3111 21.6769C24.3597 21.6705 24.4142 21.6647 24.474 21.6585C25.1003 21.592 26.4037 21.454 27.5594 20.1823C28.5223 19.1358 28.8008 17.1007 28.8292 16.8723L28.8325 16.8426C28.8412 16.7451 29.0464 14.4293 29.0464 12.1042V9.93077C29.0461 7.60566 28.8412 5.28991 28.8325 5.19239ZM27.344 12.1042C27.344 14.2563 27.1561 16.4725 27.1383 16.6759C27.0661 17.2364 26.7724 18.5239 26.3033 19.0338C25.58 19.8296 24.837 19.9085 24.2945 19.9659C24.234 19.9721 24.1736 19.9789 24.1132 19.9863C20.3991 20.2549 14.8189 20.296 14.5619 20.2976C14.2736 20.2934 7.42372 20.1886 5.2742 19.989C5.16403 19.971 5.04501 19.9572 4.91963 19.9431C4.2834 19.8702 3.41247 19.7704 2.74282 19.0338L2.72705 19.017C2.26611 18.5368 1.98092 17.3328 1.90842 16.6826C1.89492 16.5288 1.70215 14.2864 1.70215 12.1042V9.93077C1.70215 7.78124 1.88964 5.56738 1.9078 5.35975C1.99403 4.69957 2.29317 3.49007 2.74282 3.00117C3.48826 2.18124 4.27432 2.09041 4.7942 2.03034C4.84384 2.02455 4.89013 2.01927 4.93291 2.01371C8.70107 1.74379 14.3214 1.70368 14.5231 1.70215C14.7247 1.70345 20.3431 1.74379 24.0778 2.01371C24.1236 2.0195 24.1737 2.02523 24.2275 2.03147C24.7623 2.0924 25.5705 2.18459 26.3122 2.9757L26.319 2.98301C26.78 3.46324 27.0652 4.68828 27.1376 5.35152C27.1505 5.4967 27.344 7.74397 27.344 9.93077V12.1042Z"
            class="group-hover:fill-[#171543] fill-white duration-300"
          ></path>
        </svg>
      </div>
    </button>
  </div>
</div>





      
      </div>
      <div className="md:w-[316px]">
        <div className="mt-[23px] flex">
          <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.8472 14.8554L16.4306 12.8764L16.4184 12.8707C16.1892 12.7727 15.939 12.7333 15.6907 12.7562C15.4424 12.7792 15.2037 12.8636 14.9963 13.002C14.9718 13.0181 14.9484 13.0357 14.9259 13.0545L12.6441 14.9998C11.1984 14.2976 9.70595 12.8164 9.00376 11.3895L10.9519 9.07294C10.9706 9.0495 10.9884 9.02606 11.0053 9.00075C11.1407 8.79384 11.2229 8.55667 11.2445 8.31035C11.2661 8.06402 11.2264 7.81618 11.1291 7.58887V7.57762L9.14438 3.15356C9.0157 2.85662 8.79444 2.60926 8.51362 2.44841C8.2328 2.28756 7.9075 2.22184 7.58626 2.26106C6.31592 2.42822 5.14986 3.05209 4.30588 4.01615C3.4619 4.98021 2.99771 6.21852 3.00001 7.49981C3.00001 14.9436 9.05626 20.9998 16.5 20.9998C17.7813 21.0021 19.0196 20.5379 19.9837 19.6939C20.9477 18.85 21.5716 17.6839 21.7388 16.4136C21.7781 16.0924 21.7125 15.7672 21.5518 15.4864C21.3911 15.2056 21.144 14.9843 20.8472 14.8554ZM16.5 19.4998C13.3185 19.4963 10.2682 18.2309 8.01856 15.9813C5.76888 13.7316 4.50348 10.6813 4.50001 7.49981C4.49648 6.58433 4.82631 5.69887 5.42789 5.00879C6.02947 4.3187 6.86167 3.87118 7.76907 3.74981C7.7687 3.75355 7.7687 3.75732 7.76907 3.76106L9.73782 8.16731L7.80001 10.4867C7.78034 10.5093 7.76247 10.5335 7.74657 10.5589C7.60549 10.7754 7.52273 11.0246 7.5063 11.2825C7.48988 11.5404 7.54035 11.7981 7.65282 12.0307C8.5022 13.7679 10.2525 15.5051 12.0084 16.3536C12.2428 16.465 12.502 16.5137 12.7608 16.495C13.0196 16.4762 13.2692 16.3907 13.485 16.2467C13.5091 16.2305 13.5322 16.2129 13.5544 16.1942L15.8334 14.2498L20.2397 16.2232C20.2397 16.2232 20.2472 16.2232 20.25 16.2232C20.1301 17.1319 19.6833 17.9658 18.9931 18.5689C18.3028 19.172 17.4166 19.5029 16.5 19.4998Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="ml-[18px]">
            <a
              href="tel:+911800123444"
              className="font-Inter text-[14px] font-medium text-white"
            >
              +91 9839175313 , +91 8874990774
            </a>
            <p className="font-Inter text-[12px] font-medium text-white">
              Support Number
            </p>
          </div>
        </div>
        <div className="mt-[23px] flex">
          <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
            <svg
              width={20}
              height={15}
              viewBox="0 0 20 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 0H1C0.801088 0 0.610322 0.0790178 0.46967 0.21967C0.329018 0.360322 0.25 0.551088 0.25 0.75V13.5C0.25 13.8978 0.408035 14.2794 0.68934 14.5607C0.970644 14.842 1.35218 15 1.75 15H18.25C18.6478 15 19.0294 14.842 19.3107 14.5607C19.592 14.2794 19.75 13.8978 19.75 13.5V0.75C19.75 0.551088 19.671 0.360322 19.5303 0.21967C19.3897 0.0790178 19.1989 0 19 0ZM10 7.98281L2.92844 1.5H17.0716L10 7.98281ZM7.25406 7.5L1.75 12.5447V2.45531L7.25406 7.5ZM8.36406 8.51719L9.48906 9.55312C9.62743 9.68014 9.80842 9.75062 9.99625 9.75062C10.1841 9.75062 10.3651 9.68014 10.5034 9.55312L11.6284 8.51719L17.0659 13.5H2.92844L8.36406 8.51719ZM12.7459 7.5L18.25 2.45438V12.5456L12.7459 7.5Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="ml-[18px]">
            <a
              href="mailto:help@lorem.com"
              className="font-Inter text-[14px] font-medium text-[#fff]"
            >
              annantapharmaceuticals@gmail.com
            </a>
            <p className="font-Inter text-[12px] font-medium text-[#fff]">
              Support Email
            </p>
          </div>
        </div>
        <div className="mt-[23px] flex">
          <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
            <a href=''>
            <svg
              width={18}
              height={21}
              viewBox="0 0 18 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 4.5C8.25832 4.5 7.5333 4.71993 6.91661 5.13199C6.29993 5.54404 5.81928 6.12971 5.53545 6.81494C5.25162 7.50016 5.17736 8.25416 5.32205 8.98159C5.46675 9.70902 5.8239 10.3772 6.34835 10.9017C6.8728 11.4261 7.54098 11.7833 8.26841 11.9279C8.99584 12.0726 9.74984 11.9984 10.4351 11.7145C11.1203 11.4307 11.706 10.9501 12.118 10.3334C12.5301 9.7167 12.75 8.99168 12.75 8.25C12.75 7.25544 12.3549 6.30161 11.6517 5.59835C10.9484 4.89509 9.99456 4.5 9 4.5ZM9 10.5C8.55499 10.5 8.11998 10.368 7.74997 10.1208C7.37996 9.87357 7.09157 9.52217 6.92127 9.11104C6.75097 8.6999 6.70642 8.2475 6.79323 7.81105C6.88005 7.37459 7.09434 6.97368 7.40901 6.65901C7.72368 6.34434 8.12459 6.13005 8.56105 6.04323C8.9975 5.95642 9.4499 6.00097 9.86104 6.17127C10.2722 6.34157 10.6236 6.62996 10.8708 6.99997C11.118 7.36998 11.25 7.80499 11.25 8.25C11.25 8.84674 11.0129 9.41903 10.591 9.84099C10.169 10.2629 9.59674 10.5 9 10.5ZM9 0C6.81273 0.00248131 4.71575 0.872472 3.16911 2.41911C1.62247 3.96575 0.752481 6.06273 0.75 8.25C0.75 11.1938 2.11031 14.3138 4.6875 17.2734C5.84552 18.6108 7.14886 19.8151 8.57344 20.8641C8.69954 20.9524 8.84978 20.9998 9.00375 20.9998C9.15772 20.9998 9.30796 20.9524 9.43406 20.8641C10.856 19.8147 12.1568 18.6104 13.3125 17.2734C15.8859 14.3138 17.25 11.1938 17.25 8.25C17.2475 6.06273 16.3775 3.96575 14.8309 2.41911C13.2843 0.872472 11.1873 0.00248131 9 0ZM9 19.3125C7.45031 18.0938 2.25 13.6172 2.25 8.25C2.25 6.45979 2.96116 4.7429 4.22703 3.47703C5.4929 2.21116 7.20979 1.5 9 1.5C10.7902 1.5 12.5071 2.21116 13.773 3.47703C15.0388 4.7429 15.75 6.45979 15.75 8.25C15.75 13.6153 10.5497 18.0938 9 19.3125Z"
                fill="white"
              />
            </svg>
            </a>
          </div>
          <div className="ml-[18px]">
            <a
              href="mailto:help@lorem.com"
              className="font-Inter text-[14px] font-medium text-[#fff]"
            >
              
            </a>
            <p className="font-Inter text-[12px] font-medium text-white">
            Annantapharmaceuticals Sarsaul 209402 Kanpur Uttar Pradesh

            </p>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
    <hr className="mt-[30px] text-white" />
    <div className="flex items-center justify-center pb-8 pt-[9px] md:py-8">
      <p className="text-[10px] font-normal text-white md:text-[12px]">
        © Copyright
        {/* */}2025
        {/* */}, All Rights Reserved by Annanta Pharmaceuticals
      </p>
    </div>
  </div>
</div>

    </div>
  )
}

export default Footer
