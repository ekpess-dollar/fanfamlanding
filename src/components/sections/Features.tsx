import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BrowserFrame } from "@/components/ui/DeviceFrame";
import { Media } from "@/components/ui/Media";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";
import {
  HeartIcon,
  LiveIcon,
  MessageIcon,
  VerifyIcon,
  type IconLike,
} from "@/components/ui/Icons";

type Feature = {
  id: string;
  eyebrow: string;
  Icon: IconLike;
  title: string;
  body: string;
  points: string[];
  image: { src: string; w: number; h: number; alt: string; label: string };
  reverse?: boolean;
};

const features: Feature[] = [
  {
    id: "creators",
    eyebrow: "Subscriptions & gifting",
    Icon: HeartIcon,
    title: "Turn your biggest fans into recurring income",
    body: "Build a profile fans love, offer paid subscriptions, and let supporters gift you directly. Every post, photo and video can earn.",
    points: [
      "Verified creator profiles with subscriber tiers",
      "One-tap gifting and tipping on any post",
      "Schedule posts and keep a content queue",
    ],
    image: {
      src: "/images/product-profile.png",
      w: 1440,
      h: 2351,
      alt: "FAN FAM creator profile showing posts, subscriber button and gifting",
      label: "fanfam.app/priscilia",
    },
  },
  {
    id: "live",
    eyebrow: "Go live",
    Icon: LiveIcon,
    title: "Stream live and feel the room react in real time",
    body: "Start a live stream in a tap. Fans join, chat, and send gifts while you broadcast — turning attention into earnings as it happens.",
    points: [
      "Low-latency live video with live chat",
      "Real-time gifts and reactions on screen",
      "Save streams to your profile afterwards",
    ],
    image: {
      src: "/images/product-live.png",
      w: 1440,
      h: 844,
      alt: "FAN FAM live streaming screen with a live chat panel",
      label: "fanfam.app/live",
    },
    reverse: true,
  },
  {
    id: "messages",
    eyebrow: "Messaging & collections",
    Icon: MessageIcon,
    title: "Stay close with direct messages and group chats",
    body: "Reply to fans one-to-one, run group chats for your community, and share exclusive media collections only subscribers can unlock.",
    points: [
      "Direct and group messaging",
      "Subscriber-only media collections",
      "Share photos, audio and video privately",
    ],
    image: {
      src: "/images/product-messages.png",
      w: 1440,
      h: 1150,
      alt: "FAN FAM messages screen with group chats and shared media",
      label: "fanfam.app/messages",
    },
  },
];

function FeatureRow({ id, eyebrow, Icon, title, body, points, image, reverse }: Feature) {
  return (
    <div
      id={id}
      className="grid scroll-mt-24 items-center gap-10 lg:grid-cols-2 lg:gap-16"
    >
      <div className={cn("flex flex-col items-start gap-5", reverse && "lg:order-2")}>
        <span className="inline-flex items-center gap-2 rounded-pill bg-brand-200 px-3 py-1.5 text-p3 font-semibold text-brand-ink">
          <Icon className="size-4" /> {eyebrow}
        </span>
        <h3 className="font-display text-display-sm font-bold text-ink-900 sm:text-[32px] sm:leading-tight">
          {title}
        </h3>
        <p className="text-p1 text-ink-500 sm:text-[17px] sm:leading-7">{body}</p>
        <ul className="flex flex-col gap-3">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-3 text-p1 text-ink-700">
              <VerifyIcon className="mt-0.5 size-5 shrink-0 text-brand" />
              {p}
            </li>
          ))}
        </ul>
      </div>

      <div className={cn(reverse && "lg:order-1")}>
        <BrowserFrame label={image.label} className="mx-auto max-w-xl">
          <div className="max-h-[460px] overflow-hidden">
            <Media
              src={image.src}
              alt={image.alt}
              width={image.w}
              height={image.h}
              sizes="(max-width: 1024px) 100vw, 560px"
              className="block"
            />
          </div>
        </BrowserFrame>
      </div>
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="scroll-mt-20 py-20 sm:py-section">
      <Container className="flex flex-col gap-16 sm:gap-24">
        <SectionHeading
          eyebrow="Everything in one place"
          title="One platform for posting, streaming, and earning"
          description="FAN FAM brings your feed, your live streams, your messages, and your money together — so you can focus on creating."
        />
        {features.map((f) => (
          <FeatureRow key={f.id} {...f} />
        ))}
      </Container>
    </section>
  );
}
