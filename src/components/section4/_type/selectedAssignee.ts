import type { MEMBER } from '@/components/section4/constants/member';

export type SelectedAssignee = (typeof MEMBER)[keyof typeof MEMBER];
