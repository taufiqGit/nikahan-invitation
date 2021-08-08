
import { motion } from 'framer-motion'

function FrameBottom({ color = '#fff', z_index = '-z-10' }) {
    return(
        <div className={`w-full absolute bottom-0 p-1 ${z_index} flex justify-between`}>
            <motion.svg 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: .2 }}            
            width="102" height="102" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g >
                    <path d="M9.82313 94.5396C11.2302 95.2568 12.5344 95.5886 13.7296 95.5352C16.6359 95.3839 20.0553 93.6153 23.9877 90.2323C24.0522 90.1733 24.143 90.082 24.263 89.9525C24.38 89.8231 24.4679 89.7376 24.5207 89.6904C24.7936 89.4543 25.073 89.4884 25.3531 89.8016C25.5188 89.9884 25.4222 90.3211 25.0604 90.7968C24.5263 91.4783 24.189 92.0147 24.0547 92.4089L24.4187 92.785C25.3496 92.9415 26.48 92.9238 27.8129 92.7291C28.8407 92.579 29.4344 92.5945 29.594 92.7698C29.8259 93.0313 29.6322 93.4263 29.0013 93.9695C28.3176 94.5628 27.1246 95.247 25.4373 96.022C23.0389 97.1144 20.8712 97.698 18.9492 97.7725C16.6919 97.8572 14.7278 97.6648 13.051 97.1954C11.4933 96.7651 10.3756 96.1663 9.68597 95.3991C9.29745 94.9622 9.18383 94.6701 9.35703 94.5254C9.4597 94.4339 9.61411 94.4406 9.82313 94.5396ZM17.7431 80.4031C17.9088 80.5899 17.8488 80.9977 17.578 81.6204C17.3013 82.2462 17.2322 82.6338 17.3678 82.7919C17.5032 82.9384 17.866 82.9947 18.4532 82.9609C19.1678 82.9196 19.8747 82.7417 20.571 82.4303C21.7736 81.8041 22.5071 81.3846 22.7715 81.1776C22.9844 81.1196 23.1933 81.2099 23.3951 81.4369C23.5787 81.6351 23.5226 81.8801 23.2445 82.1773C22.7844 82.6252 22.3244 83.0761 21.8674 83.5297C21.2615 84.1743 20.875 84.8015 20.7018 85.4027C20.5257 86.0039 20.5641 86.4453 20.814 86.724C20.9436 86.8706 21.1283 86.9263 21.3593 86.8913C21.4305 86.8875 21.6966 86.8142 22.1548 86.6745C22.879 86.4586 23.3871 86.5102 23.6762 86.8291C23.8299 87.0073 23.7937 87.1939 23.5619 87.3975C20.8298 89.7502 18.9418 91.2982 17.9158 92.0384C17.1514 92.5892 16.2908 93.0452 15.3342 93.4182C14.3834 93.7882 13.5524 94.0083 12.8647 94.0697C11.9103 94.1577 10.4799 94.156 8.57647 94.0646C8.2973 94.0479 8.07043 93.9462 7.90181 93.7594C7.63067 93.449 7.52835 93.1131 7.62757 92.7571C7.76875 92.4325 7.9011 92.1139 8.03646 91.7982C8.16863 91.2383 8.30969 90.6782 8.44487 90.1212C8.70828 89.1584 9.06749 88.2583 9.52837 87.4179C9.98929 86.5804 10.5059 85.9166 11.0781 85.4236C11.1192 85.3882 11.563 85.0539 12.4036 84.4353C13.2442 83.8109 14.0372 83.1784 14.7767 82.5408C15.0643 82.2929 15.4009 81.9367 15.7806 81.4695C16.1604 81.0052 16.4236 80.711 16.5733 80.5811C17.0692 80.1531 17.4631 80.0927 17.7431 80.4031ZM9.63638 92.7367C9.76883 92.8803 10.2298 92.7289 11.0311 92.2795C12.0476 91.7167 13.2382 90.8523 14.594 89.6833C15.8148 88.6353 16.779 87.7012 17.4924 86.8836C18.0918 86.1955 18.3508 85.8026 18.2545 85.6992C18.2002 85.6359 18.0907 85.6577 17.9259 85.7645C17.7083 85.9185 17.4818 86.0698 17.2642 86.2238C14.9069 87.7401 13.0488 89.0755 11.7048 90.2385C10.0849 91.6348 9.39541 92.4636 9.63638 92.7367ZM11.4428 73.5748C11.9095 74.092 11.987 75.251 11.678 77.043C11.4043 78.5816 11.3443 79.44 11.4918 79.6038C11.579 79.6928 11.7394 79.7023 11.973 79.6324C12.3334 79.5085 12.6879 79.3847 13.0512 79.2578C13.5949 79.0763 13.9209 79.043 14.0292 79.1578C14.1949 79.3446 14.1794 79.5222 13.9916 79.6845C13.9183 79.7495 13.6241 79.951 13.1034 80.2979C12.5856 80.6419 12.1331 80.988 11.7251 81.3364C9.94079 82.8656 8.61831 84.9935 7.75164 87.7114C7.46909 88.5728 7.25847 89.4884 7.10183 90.4469C6.99792 91.1256 6.90779 91.496 6.83741 91.5609C6.65543 91.7145 6.49215 91.7108 6.3416 91.5441C6.20911 91.3976 6.08045 90.6347 5.94062 89.2439C5.74789 87.4381 5.77474 85.6295 6.02997 83.8121C6.32713 81.5696 7.00344 79.4996 8.07382 77.6104C8.60466 76.6732 9.20979 75.7437 9.88932 74.8307C10.3822 74.1643 10.6888 73.7853 10.8032 73.6849C11.0791 73.4459 11.2952 73.4081 11.4428 73.5748Z" fill={color}/>
                    <path d="M8.38212 61.8987C8.56239 62.0679 8.71839 62.4234 8.85904 62.9681C8.99669 63.51 9.13762 63.8483 9.27885 63.9831C9.45915 64.1552 9.71847 64.2419 10.0628 64.2461C10.4071 64.2533 10.6525 64.1832 10.7901 64.0419C10.963 63.871 11.2916 63.1283 11.7789 61.8136C12.2574 60.505 12.5861 59.768 12.7413 59.609C12.9845 59.3646 13.3237 59.2119 13.7679 59.1334C14.2061 59.0608 14.5244 59.1148 14.7197 59.3041C14.8249 59.4016 14.8592 59.5291 14.8166 59.675C14.7769 59.8208 14.7993 59.9427 14.8894 60.0258C15.0126 60.1463 15.3225 60.2382 15.8159 60.2986C16.381 60.3959 16.8219 60.5268 17.1446 60.6941C17.4547 61.2628 17.6392 61.7546 17.704 62.1753C17.7689 62.5989 17.7136 62.9078 17.5232 63.1021C17.365 63.2554 17.0052 63.2019 16.4319 62.9303C15.7487 62.6514 15.1512 62.5778 14.6605 62.7209C14.7666 62.8968 14.8572 63.0148 14.9293 63.0808C15.6768 63.9693 15.8017 64.6684 15.2979 65.175C15.1602 65.3134 14.9488 65.4848 14.6576 65.6863C14.3695 65.8935 14.1727 66.0473 14.0672 66.1533C13.6161 66.6069 13.485 67.2424 13.6709 68.0714C13.8937 69.0018 14.4965 69.9358 15.4761 70.8737C17.781 73.0706 20.5504 74.4851 23.7874 75.1173C25.8226 75.521 26.9602 75.605 27.2003 75.3548C27.3234 75.234 27.416 74.8287 27.4753 74.1389C27.5996 72.7505 27.6834 71.8976 27.7295 71.5656C27.9596 69.8677 28.3927 68.2601 29.0494 66.734C29.6286 65.4124 30.2449 64.4304 30.8864 63.7824C32.5178 62.136 34.5066 61.2611 36.8437 61.1521C39.1747 61.0403 41.0855 61.6956 42.567 63.1066C43.1711 63.6889 43.6273 64.5406 43.9209 65.659C44.2204 66.7772 44.2557 67.8932 44.0179 68.9981C43.6851 70.5549 42.5535 72.3053 40.6173 74.2493C39.4866 75.3834 37.6884 76.3081 35.2108 77.0149C34.0518 77.3411 32.7852 77.6164 31.4171 77.8406C30.3893 77.9907 29.8447 78.1025 29.7744 78.1732C29.587 78.3646 29.4777 78.8602 29.4525 79.6542C29.414 80.5734 29.5043 81.581 29.7265 82.6829C30.2608 85.1994 31.2177 87.1202 32.6091 88.4481C34.6616 90.4098 36.3388 91.3589 37.6439 91.3128C38.0532 91.2901 38.8135 91.1144 39.94 90.7915C40.6877 90.555 41.2132 90.5743 41.4987 90.8439C41.6609 90.9958 41.8198 91.3485 41.9753 91.8901C42.1337 92.4287 42.3106 92.7957 42.5059 92.985C42.5931 93.0682 42.6648 93.105 42.7179 93.084C42.7355 93.0692 42.7471 93.0429 42.7436 93.0051C42.9569 92.2959 43.0278 91.5856 42.9295 90.8775C42.8477 90.2913 42.703 89.8978 42.4868 89.6972C42.3635 89.5738 41.9647 89.4888 41.2874 89.4395C40.6043 89.3903 40.1605 89.2682 39.9681 89.0788C39.5204 88.6544 39.5089 88.2272 39.9218 87.809C40.3261 87.4054 41.3434 87.1334 42.9857 86.9957C43.8454 86.9292 44.4225 87.035 44.705 87.3046C45.886 88.4347 46.4992 89.4907 46.545 90.4931C46.572 91.2021 46.4248 91.9744 46.0974 92.8102C45.7789 93.6429 45.3954 94.273 44.9619 94.7089C44.4405 95.2361 43.346 95.7301 41.6752 96.1792C41.9375 97.1788 42.051 97.9187 42.0188 98.4046C41.9938 98.9951 41.7719 99.498 41.353 99.9163C40.6266 100.653 40.0712 100.84 39.6985 100.482C39.4972 100.292 39.4151 99.9125 39.455 99.3335C39.489 98.7516 39.5227 98.1552 39.5501 97.5269C39.5583 96.7854 39.1086 95.9831 38.198 95.1112C38.0056 94.9247 37.1171 94.3723 35.5381 93.4481C33.971 92.5266 32.6708 91.5813 31.655 90.6119C29.4824 88.5354 28.1558 85.8054 27.6903 82.4246C27.5932 81.5798 27.4724 80.5086 27.3279 79.2168C27.2673 78.4414 27.2024 78.0178 27.1274 77.9519C26.9891 77.8141 26.3937 77.6736 25.3503 77.5332C23.7626 77.3097 22.4986 77.0936 21.564 76.882C19.5104 76.4262 17.48 75.6997 15.4757 74.7054C13.7522 73.85 12.4712 73.0178 11.6358 72.2205C10.6712 71.2998 9.71998 70.0418 8.78513 68.4463C7.84438 66.8538 7.32289 66.0059 7.2147 65.9026C7.00131 65.6961 6.39495 65.6226 5.39857 65.6792C4.40516 65.7358 3.72966 65.5934 3.37209 65.2551C2.87025 64.7761 3.33856 63.8222 4.76802 62.3878C6.10368 61.0417 7.30932 60.8748 8.38212 61.8987ZM29.5265 75.3244C29.6 75.4979 29.7028 75.6448 29.826 75.7624C29.9493 75.88 30.0928 75.9653 30.2537 76.0156C33.0727 74.8566 35.4356 73.3227 37.3338 71.4169C39.8206 68.9162 40.1189 66.7581 38.2257 64.9513C37.6368 64.392 36.9296 64.0989 36.1104 64.0893C35.2912 64.0738 34.5799 64.3738 33.9676 64.9807C30.5903 68.3797 29.1129 71.8266 29.5265 75.3244Z" fill={color}/>
                    <path d="M89.7839 90.3328C87.3763 89.806 79.7874 88.3875 77.5333 86.8964C75.2733 85.4084 72.9221 84.4332 71.0629 80.4571C68.7063 75.4322 66.6685 73.2289 63.0182 70.9479C57.8152 67.7016 51.095 67.8126 48.5148 67.9335C46.7531 68.0146 46.6596 68.8124 48.3581 69.1159C51.5259 69.6763 55.3061 70.7724 57.3516 72.2022C59.2564 73.535 60.1558 76.0468 60.1954 79.0814C60.235 82.116 60.7373 83.7637 58.6965 85.6567C56.949 87.2814 54.9993 87.2807 53.6138 86.6243C52.2282 85.9679 51.8843 87.1266 52.5767 88.795C53.3672 90.7006 55.2668 92.7661 57.9644 92.7715C60.4306 92.7771 61.54 91.6056 63.3511 88.9422C64.6264 87.0649 64.6925 83.7178 64.773 81.6992C64.8496 79.8376 65.8666 79.5423 66.2364 81.7324C66.6092 83.9196 67.1342 87.9916 69.9874 90.5912C75.075 95.2257 85.039 94.2177 89.2671 92.799C92.0741 91.8611 91.4625 90.7004 89.7839 90.3328Z" fill={color}/>
                    <path d="M12.2897 16.3728C12.89 18.714 14.5387 26.1118 16.1131 28.2833C17.6936 30.4547 18.7501 32.7318 22.856 34.4516C28.045 36.6253 30.3494 38.5605 32.7694 42.0786C36.2179 47.0893 36.2801 53.6733 36.2241 56.2034C36.1873 57.9278 35.3727 58.046 35.0246 56.3876C34.3671 53.3029 33.1499 49.6266 31.6374 47.6608C30.2277 45.8302 27.6411 45.0121 24.5434 45.0526C21.4458 45.093 19.7484 44.6471 17.8729 46.6921C16.2607 48.4516 16.3123 50.3581 17.0183 51.7008C17.7243 53.0405 16.5509 53.4047 14.8333 52.7701C12.8652 52.0457 10.7109 50.2394 10.6319 47.5977C10.5618 45.1856 11.7253 44.0657 14.3958 42.2226C16.2782 40.9246 19.6919 40.7725 21.7527 40.6409C23.6503 40.5173 23.9221 39.5137 21.6805 39.2057C19.4389 38.8977 15.2701 38.4928 12.5428 35.7636C7.68078 30.9052 8.44932 21.124 9.78656 16.9434C10.6673 14.17 11.8708 14.7415 12.2897 16.3728Z" fill={color}/>
                    <path d="M44.8043 59.6731C42.7638 57.7257 39.9944 56.9914 37.3493 57.3719C40.7358 54.6821 45.0752 54.2824 47.5452 56.6341C49.8982 58.8827 49.7487 62.8879 47.4119 66.1948C47.5055 63.8213 46.6554 61.4397 44.8043 59.6731Z" fill={color}/>
                    <path d="M98.8505 95.148C91.139 95.2486 83.4305 95.3493 75.719 95.4499C70.9212 95.5126 66.1233 95.5752 61.3285 95.6378C57.5217 95.6875 53.1963 96.2498 51.198 92.0749C50.7038 91.0406 48.4364 91.7098 48.9123 92.7066C50.7733 96.5954 54.5683 97.4616 58.5354 97.4099C63.2412 97.3484 67.9441 97.287 72.6499 97.2256C81.3316 97.1123 90.0134 96.9989 98.6952 96.8856C100.039 96.8681 100.402 95.1277 98.8505 95.148Z" fill={color}/>
                    <path d="M4.16695 7.02167C4.27551 15.3378 4.38407 23.654 4.49263 31.9701C4.55406 36.6761 4.61553 41.385 4.67696 46.091C4.72754 49.9657 5.60902 53.6115 9.66169 55.3465C10.6853 55.7838 12.3014 54.3265 10.9466 53.7482C6.81034 51.9765 7.03088 47.9558 6.9836 44.334C6.92156 39.5815 6.85956 34.8319 6.79756 30.0823C6.69644 22.3359 6.59532 14.5895 6.49424 6.84593C6.47819 5.61639 4.15292 5.94619 4.16695 7.02167Z" fill={color}/>
                </g>
                <defs>
                    <clipPath id="clip0">
                    <rect width="100" height="100" fill="white" transform="translate(101.297 99.9915) rotate(179.252)"/>
                    </clipPath>
                </defs>
            </motion.svg>
            <motion.svg 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: .2 }}
              className="transform -rotate-90" width="102" height="102" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path d="M9.82313 94.5396C11.2302 95.2568 12.5344 95.5886 13.7296 95.5352C16.6359 95.3839 20.0553 93.6153 23.9877 90.2323C24.0522 90.1733 24.143 90.082 24.263 89.9525C24.38 89.8231 24.4679 89.7376 24.5207 89.6904C24.7936 89.4543 25.073 89.4884 25.3531 89.8016C25.5188 89.9884 25.4222 90.3211 25.0604 90.7968C24.5263 91.4783 24.189 92.0147 24.0547 92.4089L24.4187 92.785C25.3496 92.9415 26.48 92.9238 27.8129 92.7291C28.8407 92.579 29.4344 92.5945 29.594 92.7698C29.8259 93.0313 29.6322 93.4263 29.0013 93.9695C28.3176 94.5628 27.1246 95.247 25.4373 96.022C23.0389 97.1144 20.8712 97.698 18.9492 97.7725C16.6919 97.8572 14.7278 97.6648 13.051 97.1954C11.4933 96.7651 10.3756 96.1663 9.68597 95.3991C9.29745 94.9622 9.18383 94.6701 9.35703 94.5254C9.4597 94.4339 9.61411 94.4406 9.82313 94.5396ZM17.7431 80.4031C17.9088 80.5899 17.8488 80.9977 17.578 81.6204C17.3013 82.2462 17.2322 82.6338 17.3678 82.7919C17.5032 82.9384 17.866 82.9947 18.4532 82.9609C19.1678 82.9196 19.8747 82.7417 20.571 82.4303C21.7736 81.8041 22.5071 81.3846 22.7715 81.1776C22.9844 81.1196 23.1933 81.2099 23.3951 81.4369C23.5787 81.6351 23.5226 81.8801 23.2445 82.1773C22.7844 82.6252 22.3244 83.0761 21.8674 83.5297C21.2615 84.1743 20.875 84.8015 20.7018 85.4027C20.5257 86.0039 20.5641 86.4453 20.814 86.724C20.9436 86.8706 21.1283 86.9263 21.3593 86.8913C21.4305 86.8875 21.6966 86.8142 22.1548 86.6745C22.879 86.4586 23.3871 86.5102 23.6762 86.8291C23.8299 87.0073 23.7937 87.1939 23.5619 87.3975C20.8298 89.7502 18.9418 91.2982 17.9158 92.0384C17.1514 92.5892 16.2908 93.0452 15.3342 93.4182C14.3834 93.7882 13.5524 94.0083 12.8647 94.0697C11.9103 94.1577 10.4799 94.156 8.57647 94.0646C8.2973 94.0479 8.07043 93.9462 7.90181 93.7594C7.63067 93.449 7.52835 93.1131 7.62757 92.7571C7.76875 92.4325 7.9011 92.1139 8.03646 91.7982C8.16863 91.2383 8.30969 90.6782 8.44487 90.1212C8.70828 89.1584 9.06749 88.2583 9.52837 87.4179C9.98929 86.5804 10.5059 85.9166 11.0781 85.4236C11.1192 85.3882 11.563 85.0539 12.4036 84.4353C13.2442 83.8109 14.0372 83.1784 14.7767 82.5408C15.0643 82.2929 15.4009 81.9367 15.7806 81.4695C16.1604 81.0052 16.4236 80.711 16.5733 80.5811C17.0692 80.1531 17.4631 80.0927 17.7431 80.4031ZM9.63638 92.7367C9.76883 92.8803 10.2298 92.7289 11.0311 92.2795C12.0476 91.7167 13.2382 90.8523 14.594 89.6833C15.8148 88.6353 16.779 87.7012 17.4924 86.8836C18.0918 86.1955 18.3508 85.8026 18.2545 85.6992C18.2002 85.6359 18.0907 85.6577 17.9259 85.7645C17.7083 85.9185 17.4818 86.0698 17.2642 86.2238C14.9069 87.7401 13.0488 89.0755 11.7048 90.2385C10.0849 91.6348 9.39541 92.4636 9.63638 92.7367ZM11.4428 73.5748C11.9095 74.092 11.987 75.251 11.678 77.043C11.4043 78.5816 11.3443 79.44 11.4918 79.6038C11.579 79.6928 11.7394 79.7023 11.973 79.6324C12.3334 79.5085 12.6879 79.3847 13.0512 79.2578C13.5949 79.0763 13.9209 79.043 14.0292 79.1578C14.1949 79.3446 14.1794 79.5222 13.9916 79.6845C13.9183 79.7495 13.6241 79.951 13.1034 80.2979C12.5856 80.6419 12.1331 80.988 11.7251 81.3364C9.94079 82.8656 8.61831 84.9935 7.75164 87.7114C7.46909 88.5728 7.25847 89.4884 7.10183 90.4469C6.99792 91.1256 6.90779 91.496 6.83741 91.5609C6.65543 91.7145 6.49215 91.7108 6.3416 91.5441C6.20911 91.3976 6.08045 90.6347 5.94062 89.2439C5.74789 87.4381 5.77474 85.6295 6.02997 83.8121C6.32713 81.5696 7.00344 79.4996 8.07382 77.6104C8.60466 76.6732 9.20979 75.7437 9.88932 74.8307C10.3822 74.1643 10.6888 73.7853 10.8032 73.6849C11.0791 73.4459 11.2952 73.4081 11.4428 73.5748Z" fill={color}/>
                    <path d="M8.38212 61.8987C8.56239 62.0679 8.71839 62.4234 8.85904 62.9681C8.99669 63.51 9.13762 63.8483 9.27885 63.9831C9.45915 64.1552 9.71847 64.2419 10.0628 64.2461C10.4071 64.2533 10.6525 64.1832 10.7901 64.0419C10.963 63.871 11.2916 63.1283 11.7789 61.8136C12.2574 60.505 12.5861 59.768 12.7413 59.609C12.9845 59.3646 13.3237 59.2119 13.7679 59.1334C14.2061 59.0608 14.5244 59.1148 14.7197 59.3041C14.8249 59.4016 14.8592 59.5291 14.8166 59.675C14.7769 59.8208 14.7993 59.9427 14.8894 60.0258C15.0126 60.1463 15.3225 60.2382 15.8159 60.2986C16.381 60.3959 16.8219 60.5268 17.1446 60.6941C17.4547 61.2628 17.6392 61.7546 17.704 62.1753C17.7689 62.5989 17.7136 62.9078 17.5232 63.1021C17.365 63.2554 17.0052 63.2019 16.4319 62.9303C15.7487 62.6514 15.1512 62.5778 14.6605 62.7209C14.7666 62.8968 14.8572 63.0148 14.9293 63.0808C15.6768 63.9693 15.8017 64.6684 15.2979 65.175C15.1602 65.3134 14.9488 65.4848 14.6576 65.6863C14.3695 65.8935 14.1727 66.0473 14.0672 66.1533C13.6161 66.6069 13.485 67.2424 13.6709 68.0714C13.8937 69.0018 14.4965 69.9358 15.4761 70.8737C17.781 73.0706 20.5504 74.4851 23.7874 75.1173C25.8226 75.521 26.9602 75.605 27.2003 75.3548C27.3234 75.234 27.416 74.8287 27.4753 74.1389C27.5996 72.7505 27.6834 71.8976 27.7295 71.5656C27.9596 69.8677 28.3927 68.2601 29.0494 66.734C29.6286 65.4124 30.2449 64.4304 30.8864 63.7824C32.5178 62.136 34.5066 61.2611 36.8437 61.1521C39.1747 61.0403 41.0855 61.6956 42.567 63.1066C43.1711 63.6889 43.6273 64.5406 43.9209 65.659C44.2204 66.7772 44.2557 67.8932 44.0179 68.9981C43.6851 70.5549 42.5535 72.3053 40.6173 74.2493C39.4866 75.3834 37.6884 76.3081 35.2108 77.0149C34.0518 77.3411 32.7852 77.6164 31.4171 77.8406C30.3893 77.9907 29.8447 78.1025 29.7744 78.1732C29.587 78.3646 29.4777 78.8602 29.4525 79.6542C29.414 80.5734 29.5043 81.581 29.7265 82.6829C30.2608 85.1994 31.2177 87.1202 32.6091 88.4481C34.6616 90.4098 36.3388 91.3589 37.6439 91.3128C38.0532 91.2901 38.8135 91.1144 39.94 90.7915C40.6877 90.555 41.2132 90.5743 41.4987 90.8439C41.6609 90.9958 41.8198 91.3485 41.9753 91.8901C42.1337 92.4287 42.3106 92.7957 42.5059 92.985C42.5931 93.0682 42.6648 93.105 42.7179 93.084C42.7355 93.0692 42.7471 93.0429 42.7436 93.0051C42.9569 92.2959 43.0278 91.5856 42.9295 90.8775C42.8477 90.2913 42.703 89.8978 42.4868 89.6972C42.3635 89.5738 41.9647 89.4888 41.2874 89.4395C40.6043 89.3903 40.1605 89.2682 39.9681 89.0788C39.5204 88.6544 39.5089 88.2272 39.9218 87.809C40.3261 87.4054 41.3434 87.1334 42.9857 86.9957C43.8454 86.9292 44.4225 87.035 44.705 87.3046C45.886 88.4347 46.4992 89.4907 46.545 90.4931C46.572 91.2021 46.4248 91.9744 46.0974 92.8102C45.7789 93.6429 45.3954 94.273 44.9619 94.7089C44.4405 95.2361 43.346 95.7301 41.6752 96.1792C41.9375 97.1788 42.051 97.9187 42.0188 98.4046C41.9938 98.9951 41.7719 99.498 41.353 99.9163C40.6266 100.653 40.0712 100.84 39.6985 100.482C39.4972 100.292 39.4151 99.9125 39.455 99.3335C39.489 98.7516 39.5227 98.1552 39.5501 97.5269C39.5583 96.7854 39.1086 95.9831 38.198 95.1112C38.0056 94.9247 37.1171 94.3723 35.5381 93.4481C33.971 92.5266 32.6708 91.5813 31.655 90.6119C29.4824 88.5354 28.1558 85.8054 27.6903 82.4246C27.5932 81.5798 27.4724 80.5086 27.3279 79.2168C27.2673 78.4414 27.2024 78.0178 27.1274 77.9519C26.9891 77.8141 26.3937 77.6736 25.3503 77.5332C23.7626 77.3097 22.4986 77.0936 21.564 76.882C19.5104 76.4262 17.48 75.6997 15.4757 74.7054C13.7522 73.85 12.4712 73.0178 11.6358 72.2205C10.6712 71.2998 9.71998 70.0418 8.78513 68.4463C7.84438 66.8538 7.32289 66.0059 7.2147 65.9026C7.00131 65.6961 6.39495 65.6226 5.39857 65.6792C4.40516 65.7358 3.72966 65.5934 3.37209 65.2551C2.87025 64.7761 3.33856 63.8222 4.76802 62.3878C6.10368 61.0417 7.30932 60.8748 8.38212 61.8987ZM29.5265 75.3244C29.6 75.4979 29.7028 75.6448 29.826 75.7624C29.9493 75.88 30.0928 75.9653 30.2537 76.0156C33.0727 74.8566 35.4356 73.3227 37.3338 71.4169C39.8206 68.9162 40.1189 66.7581 38.2257 64.9513C37.6368 64.392 36.9296 64.0989 36.1104 64.0893C35.2912 64.0738 34.5799 64.3738 33.9676 64.9807C30.5903 68.3797 29.1129 71.8266 29.5265 75.3244Z" fill={color}/>
                    <path d="M89.7839 90.3328C87.3763 89.806 79.7874 88.3875 77.5333 86.8964C75.2733 85.4084 72.9221 84.4332 71.0629 80.4571C68.7063 75.4322 66.6685 73.2289 63.0182 70.9479C57.8152 67.7016 51.095 67.8126 48.5148 67.9335C46.7531 68.0146 46.6596 68.8124 48.3581 69.1159C51.5259 69.6763 55.3061 70.7724 57.3516 72.2022C59.2564 73.535 60.1558 76.0468 60.1954 79.0814C60.235 82.116 60.7373 83.7637 58.6965 85.6567C56.949 87.2814 54.9993 87.2807 53.6138 86.6243C52.2282 85.9679 51.8843 87.1266 52.5767 88.795C53.3672 90.7006 55.2668 92.7661 57.9644 92.7715C60.4306 92.7771 61.54 91.6056 63.3511 88.9422C64.6264 87.0649 64.6925 83.7178 64.773 81.6992C64.8496 79.8376 65.8666 79.5423 66.2364 81.7324C66.6092 83.9196 67.1342 87.9916 69.9874 90.5912C75.075 95.2257 85.039 94.2177 89.2671 92.799C92.0741 91.8611 91.4625 90.7004 89.7839 90.3328Z" fill={color}/>
                    <path d="M12.2897 16.3728C12.89 18.714 14.5387 26.1118 16.1131 28.2833C17.6936 30.4547 18.7501 32.7318 22.856 34.4516C28.045 36.6253 30.3494 38.5605 32.7694 42.0786C36.2179 47.0893 36.2801 53.6733 36.2241 56.2034C36.1873 57.9278 35.3727 58.046 35.0246 56.3876C34.3671 53.3029 33.1499 49.6266 31.6374 47.6608C30.2277 45.8302 27.6411 45.0121 24.5434 45.0526C21.4458 45.093 19.7484 44.6471 17.8729 46.6921C16.2607 48.4516 16.3123 50.3581 17.0183 51.7008C17.7243 53.0405 16.5509 53.4047 14.8333 52.7701C12.8652 52.0457 10.7109 50.2394 10.6319 47.5977C10.5618 45.1856 11.7253 44.0657 14.3958 42.2226C16.2782 40.9246 19.6919 40.7725 21.7527 40.6409C23.6503 40.5173 23.9221 39.5137 21.6805 39.2057C19.4389 38.8977 15.2701 38.4928 12.5428 35.7636C7.68078 30.9052 8.44932 21.124 9.78656 16.9434C10.6673 14.17 11.8708 14.7415 12.2897 16.3728Z" fill={color}/>
                    <path d="M44.8043 59.6731C42.7638 57.7257 39.9944 56.9914 37.3493 57.3719C40.7358 54.6821 45.0752 54.2824 47.5452 56.6341C49.8982 58.8827 49.7487 62.8879 47.4119 66.1948C47.5055 63.8213 46.6554 61.4397 44.8043 59.6731Z" fill={color}/>
                    <path d="M98.8505 95.148C91.139 95.2486 83.4305 95.3493 75.719 95.4499C70.9212 95.5126 66.1233 95.5752 61.3285 95.6378C57.5217 95.6875 53.1963 96.2498 51.198 92.0749C50.7038 91.0406 48.4364 91.7098 48.9123 92.7066C50.7733 96.5954 54.5683 97.4616 58.5354 97.4099C63.2412 97.3484 67.9441 97.287 72.6499 97.2256C81.3316 97.1123 90.0134 96.9989 98.6952 96.8856C100.039 96.8681 100.402 95.1277 98.8505 95.148Z" fill={color}/>
                    <path d="M4.16695 7.02167C4.27551 15.3378 4.38407 23.654 4.49263 31.9701C4.55406 36.6761 4.61553 41.385 4.67696 46.091C4.72754 49.9657 5.60902 53.6115 9.66169 55.3465C10.6853 55.7838 12.3014 54.3265 10.9466 53.7482C6.81034 51.9765 7.03088 47.9558 6.9836 44.334C6.92156 39.5815 6.85956 34.8319 6.79756 30.0823C6.69644 22.3359 6.59532 14.5895 6.49424 6.84593C6.47819 5.61639 4.15292 5.94619 4.16695 7.02167Z" fill={color}/>
                </g>
                <defs>
                    <clipPath id="clip0">
                    <rect width="100" height="100" fill="white" transform="translate(101.297 99.9915) rotate(179.252)"/>
                    </clipPath>
                </defs>
            </motion.svg>
        </div>
    )
}

export default FrameBottom