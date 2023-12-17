/// <reference types="@atproto/api" />

type AccountInfo = {
  did: string;
  handle: string;
  displayName?: string;
  description?: string;
  avatarUrl?: string;
  bannerUrl?: string;
}

type PostDetails = import('@atproto/api').AppBskyFeedPost.Record & {
  uri: string;
  cid: string;
}

type BlockedByRecord = {
  blocked_date: string;
  handle: string;
  status: boolean;
}

type CompactHandleOrHandleDisplayName =
  string |
  [handle: string, displayName: string];

type SearchMatch = {
  rank: number;

  shortDID: string;
  shortDIDMatches?: string;

  handle: string;
  handleMatches?: string;

  displayName?: string;
  displayNameMatches?: string;
}