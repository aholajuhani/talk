import { GQLFeatureCommentPayloadTypeResolver } from "coral-server/graph/tenant/schema/__generated__/types";

import { moderationQueuesResolver } from "./ModerationQueues";

export const FeatureCommentPayload: GQLFeatureCommentPayloadTypeResolver = {
  moderationQueues: moderationQueuesResolver,
};
