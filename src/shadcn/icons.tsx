type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  logo: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <rect width="256" height="256" fill="none" />
      <line
        x1="208"
        y1="128"
        x2="128"
        y2="208"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <line
        x1="192"
        y1="40"
        x2="40"
        y2="192"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </svg>
  ),
  twitter: (props: IconProps) => (
    <svg
      {...props}
      height="23"
      viewBox="0 0 1200 1227"
      width="23"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
    </svg>
  ),
  gitHub: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"></path>
    </svg>
  ),
  radix: (props: IconProps) => (
    <svg viewBox="0 0 25 25" fill="none" {...props}>
      <path
        d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"
        fill="currentcolor"></path>
      <path d="M12 0H4V8H12V0Z" fill="currentcolor"></path>
      <path
        d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"
        fill="currentcolor"></path>
    </svg>
  ),
  aria: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm15.116 0h-8.884L24 22.624Z" />
    </svg>
  ),
  npm: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"
        fill="currentColor"
      />
    </svg>
  ),
  yarn: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm.768 4.105c.183 0 .363.053.525.157.125.083.287.185.755 1.154.31-.088.468-.042.551-.019.204.056.366.19.463.375.477.917.542 2.553.334 3.605-.241 1.232-.755 2.029-1.131 2.576.324.329.778.899 1.117 1.825.278.774.31 1.478.273 2.015a5.51 5.51 0 0 0 .602-.329c.593-.366 1.487-.917 2.553-.931.714-.009 1.269.445 1.353 1.103a1.23 1.23 0 0 1-.945 1.362c-.649.158-.95.278-1.821.843-1.232.797-2.539 1.242-3.012 1.39a1.686 1.686 0 0 1-.704.343c-.737.181-3.266.315-3.466.315h-.046c-.783 0-1.214-.241-1.45-.491-.658.329-1.51.19-2.122-.134a1.078 1.078 0 0 1-.58-1.153 1.243 1.243 0 0 1-.153-.195c-.162-.25-.528-.936-.454-1.946.056-.723.556-1.367.88-1.71a5.522 5.522 0 0 1 .408-2.256c.306-.727.885-1.348 1.32-1.737-.32-.537-.644-1.367-.329-2.21.227-.602.412-.936.82-1.08h-.005c.199-.074.389-.153.486-.259a3.418 3.418 0 0 1 2.298-1.103c.037-.093.079-.185.125-.283.31-.658.639-1.029 1.024-1.168a.94.94 0 0 1 .328-.06zm.006.7c-.507.016-1.001 1.519-1.001 1.519s-1.27-.204-2.266.871c-.199.218-.468.334-.746.44-.079.028-.176.023-.417.672-.371.991.625 2.094.625 2.094s-1.186.839-1.626 1.881c-.486 1.144-.338 2.261-.338 2.261s-.843.732-.899 1.487c-.051.663.139 1.2.343 1.515.227.343.51.176.51.176s-.561.653-.037.931c.477.25 1.283.394 1.71-.037.31-.31.371-1.001.486-1.283.028-.065.12.111.209.199.097.093.264.195.264.195s-.755.324-.445 1.066c.102.246.468.403 1.066.398.222-.005 2.664-.139 3.313-.296.375-.088.505-.283.505-.283s1.566-.431 2.998-1.357c.917-.598 1.293-.76 2.034-.936.612-.148.57-1.098-.241-1.084-.839.009-1.575.44-2.196.825-1.163.718-1.742.672-1.742.672l-.018-.032c-.079-.13.371-1.293-.134-2.678-.547-1.515-1.413-1.881-1.344-1.997.297-.5 1.038-1.297 1.334-2.78.176-.899.13-2.377-.269-3.151-.074-.144-.732.241-.732.241s-.616-1.371-.788-1.483a.271.271 0 0 0-.157-.046z"
        fill="currentColor"
      />
    </svg>
  ),
  pnpm: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M0 0v7.5h7.5V0zm8.25 0v7.5h7.498V0zm8.25 0v7.5H24V0zM8.25 8.25v7.5h7.498v-7.5zm8.25 0v7.5H24v-7.5zM0 16.5V24h7.5v-7.5zm8.25 0V24h7.498v-7.5zm8.25 0V24H24v-7.5z"
        fill="currentColor"
      />
    </svg>
  ),
  react: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
        fill="currentColor"
      />
    </svg>
  ),
  tailwind: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
        fill="currentColor"
      />
    </svg>
  ),
  google: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
      />
    </svg>
  ),
  apple: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
        fill="currentColor"
      />
    </svg>
  ),
  paypal: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"
        fill="currentColor"
      />
    </svg>
  ),
  tamara: (props: IconProps) => (
    <svg
      width="80"
      height="37"
      viewBox="0 0 108 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.5836 8.18949C7.31656 8.18578 6.92713 8.46395 6.78619 8.72357C6.35967 9.5284 6.05183 10.3963 5.64385 11.2122C5.42503 11.6499 5.52517 11.9095 5.83671 12.2581C6.67492 13.1928 7.53909 14.1163 8.23266 15.1548C9.06345 16.3973 8.95218 17.7213 7.89144 18.7598C7.09032 19.5461 6.14455 20.2545 5.13573 20.7367C3.67443 21.4302 2.09444 21.8716 0.577508 22.4539C0.366101 22.5355 0.039719 22.8062 0.0137567 22.9843C-0.0752566 23.548 0.239999 23.7112 0.447697 23.8039C2.19458 24.5679 3.96743 25.2689 5.81075 26.0181C6.40417 25.1243 7.00131 24.2935 7.52426 23.4145C10.3467 18.6782 10.9698 13.7973 8.37359 8.74582C8.23637 8.48249 7.85806 8.1932 7.5836 8.18949V8.18949Z"
        fill="currentColor"
        data-darkreader-inline-fill=""
        // style="--darkreader-inline-fill: #ffffff;"
      ></path>
      <path
        d="M70.1562 2.04752L70.0932 1.98447C69.2513 1.14255 67.8901 1.14255 67.0482 1.98447C66.2063 2.82638 66.2063 4.18755 67.0482 5.02946L67.1112 5.09252C68.3278 6.30903 69.6926 5.55613 70.1562 5.09252C70.9982 4.2506 70.9982 2.88943 70.1562 2.04752Z"
        fill="currentColor"
        data-darkreader-inline-fill=""
        // style="--darkreader-inline-fill: #ffffff;"
      ></path>
      <path
        d="M61.2031 2.1328C60.9842 2.35162 60.8173 2.60754 60.7061 2.87828L63.9736 5.70817C64.1368 5.61174 64.2888 5.49676 64.4298 5.35953L64.4965 5.29277C65.7872 4.00208 64.9898 2.55932 64.4965 2.06604C63.6064 1.1759 62.1599 1.1759 61.2698 2.06604L61.2031 2.1328V2.1328Z"
        fill="currentColor"
        data-darkreader-inline-fill=""
        // style="--darkreader-inline-fill: #ffffff;"
      ></path>
      <path
        d="M12.6871 0.675255C12.6871 0.675255 11.8823 2.34796 11.5188 3.20472C11.3704 3.55335 11.274 3.95762 11.2926 4.33222C11.4261 7.31046 11.5485 10.2924 11.7636 13.2632C11.9861 16.2897 13.4771 18.5002 16.2773 19.776C18.2356 20.6699 20.3163 21.0741 22.4415 21.1965C25.123 21.3486 27.812 21.4302 30.5009 21.4525C34.9664 21.4895 39.3985 21.1706 43.7676 20.2953C45.1176 20.121 49.3309 19.0305 50.0616 18.6337C50.885 18.1886 50.8293 18.2925 51.6564 18.5039C53.6666 19.012 58.9741 18.8896 60.5021 18.4371C61.5258 18.1367 62.4604 17.8919 62.6867 17.1909C63.625 18.6708 64.1517 19.4237 65.7687 19.279C67.3821 19.1344 67.523 19.0528 69.1067 18.7005C70.4308 18.4075 71.4063 17.5507 71.8031 16.2637C72.0479 15.4663 72.0182 15.0843 72.085 14.4872C72.3298 12.3768 72.0034 10.374 70.7832 8.59744C70.5866 8.31186 70.4642 8.02998 69.7706 8.07449C69.5555 8.08933 69.2328 8.40829 69.0993 8.66791C68.6988 9.4542 68.3946 10.2924 67.9941 11.0824C67.7678 11.5275 67.8717 11.8427 68.2203 12.1654C68.9621 12.8478 69.6482 13.5228 70.5792 14.4649C68.8063 14.6504 68.1944 14.8432 66.6663 14.9619C65.1308 15.0806 62.338 15.0583 61.5517 13.6786C60.9769 12.6661 60.606 11.9688 59.6713 11.279C58.1136 10.1292 55.599 10.1366 53.496 11.2196C52.5465 11.7092 51.5451 12.6661 51.3819 13.8047C51.3078 14.3128 51.1335 14.7319 50.5623 14.8803C41.8575 17.1168 31.6432 18.1627 23.0683 17.2021C20.8838 16.9573 18.7215 16.5975 16.6482 15.789C14.8086 15.0695 13.9741 13.7973 14.0112 11.8056C14.0742 8.13754 14.0334 4.46574 14.0149 0.793939C14.0149 0.793939 14.0742 0.0818324 13.3399 0.0187812C13.0506 -0.00718098 12.676 0.682673 12.676 0.682673L12.6871 0.675255ZM59.7937 15.9188L52.6652 15.8335C52.6652 15.8335 53.1919 13.0184 56.0922 12.9109C60.2685 12.7514 59.7937 15.9225 59.7937 15.9225V15.9188Z"
        fill="currentColor"
        data-darkreader-inline-fill=""
        // style="--darkreader-inline-fill: #000000;"
      ></path>
      <path
        d="M2.93275 1.0166C2.93275 1.0166 2.99209 0.304489 2.25773 0.241437C1.96844 0.215475 1.59384 0.905329 1.59384 0.905329C1.59384 0.905329 0.789012 2.57804 0.425541 3.43479C0.277186 3.78343 0.180755 4.1877 0.199299 4.56229C0.266059 6.0236 0.32911 7.48861 0.399579 8.94991H0.392161C0.488592 11.0306 0.588732 13.1113 0.688872 15.192C0.748215 16.4715 0.818684 17.7474 0.885444 19.0529H2.06858C2.35787 17.599 2.86228 16.1674 2.89566 14.7247C2.94017 12.7849 2.94017 3.6462 2.92533 1.0203L2.93275 1.0166Z"
        fill="currentColor"
        data-darkreader-inline-fill=""
        // style="--darkreader-inline-fill: #ffffff;"
      ></path>
      <path
        d="M79.0613 7.65529C78.4197 8.3266 77.9412 9.09805 77.626 9.914L87.5732 18.1663C88.0517 17.8696 88.5041 17.5172 88.9121 17.0907L89.105 16.8904C92.8769 12.9516 90.3994 8.68636 88.8973 7.24731C86.1787 4.63996 81.8615 4.73639 79.2542 7.45501L79.0613 7.65529V7.65529Z"
        fill="currentColor"
        data-darkreader-inline-fill=""
        // style="--darkreader-inline-fill: #ffffff;"
      ></path>
      <path
        d="M100.888 18.7338C104.606 18.7338 107.62 15.7199 107.62 12.0021C107.62 8.28436 104.606 5.27051 100.888 5.27051C97.1703 5.27051 94.1565 8.28436 94.1565 12.0021C94.1565 15.7199 97.1703 18.7338 100.888 18.7338Z"
        fill="currentColor"
        data-darkreader-inline-fill=""
        // style="--darkreader-inline-fill: #ffffff;"
      ></path>
    </svg>
  ),
  tabby: (props: IconProps) => (
    <svg
      width="80"
      height="37"
      viewBox="0 0 141 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M122.239 16.873L113.948 48.5272L113.929 48.5989H120.386L128.707 16.873H122.239Z"
        fill="currentColor"
        data-darkreader-inline-fill=""
        // style="--darkreader-inline-fill: #ffffff;"
      ></path>
      <path
        d="M19.643 34.8883C18.6747 35.3651 17.6091 35.6112 16.5297 35.6072C14.2043 35.6072 12.8847 35.2358 12.7413 33.3563V33.2297C12.7413 33.1551 12.7328 33.089 12.7328 33.0018V27.528L12.7413 26.8837V23.0248H12.7328V21.3831L12.7413 20.7332V17.008L6.97342 17.7691C10.8744 17.0136 13.1126 13.9272 13.1126 10.8505V8.95557H6.63157V17.8183L6.26581 17.921V34.334C6.47964 38.9455 9.5183 41.6859 14.504 41.6859C16.2667 41.6859 18.2066 41.285 19.6922 40.6111L19.726 40.597V34.8391L19.643 34.8883Z"
        fill="currentColor"
        data-darkreader-inline-fill=""
        // style="--darkreader-inline-fill: #2f3235;"
      ></path>
      <path
        d="M20.6657 15.6799L2.47736 18.4837V23.0951L20.6657 20.2914V15.6799Z"
        fill="currentColor"
        data-darkreader-inline-fill=""
        // style="--darkreader-inline-fill: #ffffff;"
      ></path>
      <path
        d="M20.6657 22.427L2.47736 25.2307V29.6368L20.6657 26.8317V22.427Z"
        fill="currentColor"
        data-darkreader-inline-fill=""
        // style="--darkreader-inline-fill: #ffffff;"
      ></path>
      <path
        d="M41.0782 24.5485C40.8208 19.425 37.6189 16.3892 32.4026 16.3892C29.4033 16.3892 26.9316 17.5469 25.2533 19.7401C23.575 21.9333 22.6971 25.1394 22.6971 29.0362C22.6971 32.933 23.5806 36.1489 25.2533 38.3336C26.9259 40.5184 29.4033 41.6846 32.4026 41.6846C37.6189 41.6846 40.8208 38.6333 41.0782 33.483V41.2021H47.5495V16.9294L41.0782 17.9282V24.5485ZM41.4159 29.0418C41.4159 33.5801 39.0328 36.5119 35.3456 36.5119C31.5472 36.5119 29.2753 33.7194 29.2753 29.0418C29.2711 24.3375 31.5402 21.5239 35.3414 21.5239C37.1899 21.5239 38.7345 22.2442 39.8079 23.606C40.856 24.9368 41.4116 26.8149 41.4116 29.0376L41.4159 29.0418Z"
        fill="currentColor"
        data-darkreader-inline-fill=""
        // style="--darkreader-inline-fill: #ffffff;"
      ></path>
      <path
        d="M66.4581 16.3905C61.2389 16.3905 58.0356 19.4277 57.7824 24.5569V9.86157L51.3013 10.8618V41.2034H57.7824V33.4815C58.0356 38.6388 61.2389 41.693 66.4581 41.693C72.5649 41.693 76.2113 36.9647 76.2113 29.0445C76.2113 21.1243 72.5649 16.3905 66.4581 16.3905ZM63.5151 36.5075C59.8265 36.5075 57.4448 33.5758 57.4448 29.0375C57.4448 26.8148 57.999 24.9367 59.0485 23.6031C60.1219 22.2413 61.6665 21.521 63.5151 21.521C67.3134 21.521 69.5854 24.3346 69.5854 29.0375C69.5854 33.7151 67.3162 36.5075 63.5151 36.5075Z"
        fill="currentColor"
        data-darkreader-inline-fill=""
        // style="--darkreader-inline-fill: #ffffff;"
      ></path>
      <path
        d="M93.8595 16.3905C88.6403 16.3905 85.4385 19.4277 85.1838 24.5569V9.86157L78.7028 10.8618V41.2034H85.1838V33.4815C85.4385 38.6388 88.6403 41.693 93.8595 41.693C99.9663 41.693 103.613 36.9647 103.613 29.0445C103.613 21.1243 99.9663 16.3905 93.8595 16.3905ZM90.9165 36.5075C87.2293 36.5075 84.8462 33.5758 84.8462 29.0375C84.8462 26.8148 85.4005 24.9367 86.4499 23.6031C87.5233 22.2413 89.068 21.521 90.9165 21.521C94.7148 21.521 96.9868 24.3346 96.9868 29.0375C96.9868 33.7151 94.7176 36.5075 90.9165 36.5075Z"
        fill="currentColor"
        data-darkreader-inline-fill=""
        // style="--darkreader-inline-fill: #ffffff;"
      ></path>
      <path
        d="M103.628 16.873H110.548L116.17 41.1584H109.966L103.628 16.873Z"
        fill="currentColor"
        data-darkreader-inline-fill=""
        // style="--darkreader-inline-fill: #ffffff;"
      ></path>
    </svg>
  ),
  card: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      //   xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      x="0px"
      y="0px"
      width="70"
      height="37"
      viewBox="28 8 5 45"
      //   style="enable-background:new 0 0 60 60;"
      xmlSpace="preserve">
      <g>
        <g>
          <path
            d="M14.3,35.5h-2c-2.2,0-4,1.8-4,4v2c0,2.2,1.8,4,4,4h2c2.2,0,4-1.8,4-4v-2C18.3,37.3,16.5,35.5,14.3,35.5z"
            fill="currentColor"
          />
          <rect x="22.3" y="37.8" width="22.5" height="2" fill="currentColor" />
          <rect x="22.3" y="41.8" width="17.5" height="2" fill="currentColor" />
          <path
            d="M53,9.5H14c-2.8,0-5,2.2-5,5v2H7c-2.8,0-5,2.2-5,5v24c0,2.8,2.2,5,5,5h39c2.8,0,5-2.2,5-5v-2h2c2.8,0,5-2.2,5-5v-24    C58,11.7,55.8,9.5,53,9.5z M7,18.5h39c1.7,0,3,1.3,3,3v3H4v-3C4,19.8,5.3,18.5,7,18.5z M46,48.5H7c-1.7,0-3-1.3-3-3v-15h45v15    C49,47.2,47.7,48.5,46,48.5z M56,38.5c0,1.7-1.3,3-3,3h-2v-20c0-2.8-2.2-5-5-5H11v-2c0-1.7,1.3-3,3-3h39c1.7,0,3,1.3,3,3V38.5z"
            fill="currentColor"
          />
        </g>
      </g>
    </svg>
  ),
  spinner: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
};
