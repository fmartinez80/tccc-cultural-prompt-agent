// Turnaround sheets: each element's prompt segment rendered by Nano Banana 2 as
// three isolated views on white, so the art team can check food detail before
// the full composition is generated. The profile view is made first; the other
// two take it as image 1 so all three show the same object.

export const TURNAROUND_MODEL = "gemini_3_1_flash_image" as const;
export const TURNAROUND_ASPECT_RATIO = "4:3" as const;
export const TURNAROUND_IMAGE_SIZE = "1K" as const;

export type TurnaroundView = "profile" | "angled" | "top";

export const TURNAROUND_VIEWS: Array<{ id: TurnaroundView; label: string; camera: string }> = [
  {
    id: "profile",
    label: "Profile",
    camera:
      "View: profile. The camera sits level with the element, at its own height, and looks straight at its side, so its height, layers and side profile read clearly.",
  },
  {
    id: "angled",
    label: "30° down",
    camera:
      "View: angled 30 degrees down. The camera is raised and looks down at the element at about 30 degrees, the way a diner sees it at the table.",
  },
  {
    id: "top",
    label: "Top down",
    camera:
      "View: top down. The camera is directly overhead and looks straight down at 90 degrees, so the whole top surface and the arrangement of every piece read clearly.",
  },
];

/** The Nano Banana 2 prompt for one view of one element. `withReference`: image 1 is the profile view. */
export function turnaroundPrompt(segmentText: string, view: TurnaroundView, withReference: boolean): string {
  const v = TURNAROUND_VIEWS.find((x) => x.id === view)!;
  return [
    "Create a studio reference photograph of one element for a food-styling turnaround sheet.",
    `The element: ${segmentText}`,
    withReference
      ? "Image 1 shows this same element from the side. Keep it identical: the same pieces and count, cut, sauce, garnish, colors and container. Only the camera angle changes."
      : "",
    v.camera,
    "Show only this element, whole and centered with a comfortable margin, on a seamless pure white background that continues under it. Light it evenly from every side with large soft lights so it casts no shadows and has no dark sides, only a faint contact line where it touches the surface. Sharp focus across the whole element and true-to-life color, so every ingredient, texture and garnish reads clearly. No props, no table, and no text or labels in the image.",
  ]
    .filter(Boolean)
    .join("\n\n");
}
