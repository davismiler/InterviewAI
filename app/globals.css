@import "tailwindcss";

@plugin "tailwindcss-animate";

@custom-variant dark (&:is(.dark *));

@theme {
  --color-success-100: #49de50;
  --color-success-200: #42c748;
  --color-destructive-100: #f75353;
  --color-destructive-200: #c44141;

  --color-primary-100: #dddfff;
  --color-primary-200: #cac5fe;

  --color-light-100: #d6e0ff;
  --color-light-400: #6870a6;
  --color-light-600: #4f557d;
  --color-light-800: #24273a;

  --color-dark-100: #020408;
  --color-dark-200: #27282f;
  --color-dark-300: #242633;

  --font-mona-sans: "Mona Sans", sans-serif;

  --bg-pattern: url("/pattern.png");
}

:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.205 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: var(--light-100);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.556 0 0);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.556 0 0);
}

@theme inline {
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
  p {
    @apply text-light-100;
  }
  h2 {
    @apply text-3xl font-semibold;
  }
  h3 {
    @apply text-2xl font-semibold;
  }
  ul {
    @apply list-disc list-inside;
  }
  li {
    @apply text-light-100;
  }
}

@layer components {
  .btn-call {
    @apply inline-block px-7 py-3 font-bold text-sm leading-5 text-white transition-colors duration-150 bg-success-100 border border-transparent rounded-full shadow-sm focus:outline-none focus:shadow-2xl active:bg-success-200 hover:bg-success-200 min-w-28 cursor-pointer items-center justify-center overflow-visible;

    .span {
      @apply bg-success-100 h-[85%] w-[65%];
    }
  }

  .btn-disconnect {
    @apply inline-block px-7 py-3 text-sm font-bold leading-5 text-white transition-colors duration-150 bg-destructive-100 border border-transparent rounded-full shadow-sm focus:outline-none focus:shadow-2xl active:bg-destructive-200 hover:bg-destructive-200 min-w-28;
  }

  .btn-upload {
    @apply flex min-h-14 w-full items-center justify-center gap-1.5 rounded-md;
  }
  .btn-primary {
    @apply w-fit !bg-primary-200 !text-dark-100 hover:!bg-primary-200/80 !rounded-full !font-bold px-5 cursor-pointer min-h-10;
  }
  .btn-secondary {
    @apply w-fit !bg-dark-200 !text-primary-200 hover:!bg-dark-200/80 !rounded-full !font-bold px-5 cursor-pointer min-h-10;
  }

  .btn-upload {
    @apply bg-dark-200 rounded-full min-h-12 px-5 cursor-pointer border border-input  overflow-hidden;
  }

  .card-border {
    @apply border-gradient p-0.5 rounded-2xl w-fit;
  }

  .card {
    @apply dark-gradient rounded-2xl min-h-full;
  }

  .form {
    @apply w-full;

    .label {
      @apply !text-light-100 !font-normal;
    }

    .input {
      @apply !bg-dark-200 !rounded-full !min-h-12 !px-5 placeholder:!text-light-100;
    }

    .btn {
      @apply !w-full !bg-primary-200 !text-dark-100 hover:!bg-primary-200/80 !rounded-full !min-h-10 !font-bold !px-5 cursor-pointer;
    }
  }

  .call-view {
    @apply flex sm:flex-row flex-col gap-10 items-center justify-between w-full;

    h3 {
      @apply text-center text-primary-100 mt-5;
    }

    .card-interviewer {
      @apply flex-center flex-col gap-2 p-7 h-[400px] blue-gradient-dark rounded-lg border-2 border-primary-200/50 flex-1 sm:basis-1/2 w-full;
    }

    .avatar {
      @apply z-10 flex items-center justify-center blue-gradient rounded-full size-[120px] relative;

      .animate-speak {
        @apply absolute inline-flex size-5/6 animate-ping rounded-full bg-primary-200 opacity-75;
      }
    }

    .card-border {
      @apply border-gradient p-0.5 rounded-2xl flex-1 sm:basis-1/2 w-full h-[400px] max-md:hidden;
    }

    .card-content {
      @apply flex flex-col gap-2 justify-center items-center p-7 dark-gradient rounded-2xl min-h-full;
    }
  }

  .transcript-border {
    @apply border-gradient p-0.5 rounded-2xl w-full;

    .transcript {
      @apply dark-gradient rounded-2xl  min-h-12 px-5 py-3 flex items-center justify-center;

      p {
        @apply text-lg text-center text-white;
      }
    }
  }

  .section-feedback {
    @apply flex flex-col gap-8 max-w-5xl mx-auto max-sm:px-4 text-lg leading-7;

    .buttons {
      @apply flex w-full justify-evenly gap-4 max-sm:flex-col max-sm:items-center;
    }
  }

  .auth-layout {
    @apply flex items-center justify-center mx-auto max-w-7xl min-h-screen max-sm:px-4 max-sm:py-8;
  }

  .root-layout {
    @apply flex mx-auto max-w-7xl flex-col gap-12 my-12 px-16 max-sm:px-4 max-sm:my-8;
  }

  .card-cta {
    @apply flex flex-row blue-gradient-dark rounded-3xl px-16 py-6 items-center justify-between max-sm:px-4;
  }

  .interviews-section {
    @apply flex flex-wrap gap-4 max-lg:flex-col w-full items-stretch;
  }

  .interview-text {
    @apply text-lg text-center text-white;
  }

  .progress {
    @apply h-1.5 text-[5px] font-bold bg-primary-200 rounded-full flex-center;
  }

  .tech-tooltip {
    @apply absolute bottom-full mb-1 hidden group-hover:flex px-2 py-1 text-xs text-white bg-gray-700 rounded-md shadow-md;
  }

  .card-interview {
    @apply dark-gradient rounded-2xl min-h-full flex flex-col p-6 relative overflow-hidden gap-10 justify-between;

    .badge-text {
      @apply text-sm font-semibold capitalize;
    }
  }
}

@utility dark-gradient {
  @apply bg-gradient-to-b from-[#1A1C20] to-[#08090D];
}

@utility border-gradient {
  @apply bg-gradient-to-b from-[#4B4D4F] to-[#4B4D4F33];
}

@utility pattern {
  @apply bg-[url('/pattern.png')] bg-top bg-no-repeat;
}

@utility blue-gradient-dark {
  @apply bg-gradient-to-b from-[#171532] to-[#08090D];
}

@utility blue-gradient {
  @apply bg-gradient-to-l from-[#FFFFFF] to-[#CAC5FE];
}

@utility flex-center {
  @apply flex items-center justify-center;
}

@utility animate-fadeIn {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
