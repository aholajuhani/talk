import React, { FunctionComponent, useCallback, useState } from "react";
import { graphql } from "react-relay";

import { withFragmentContainer } from "coral-framework/lib/relay";
import { UserPopoverContainer_user as UserData } from "coral-stream/__generated__/UserPopoverContainer_user.graphql";
import { UserPopoverContainer_viewer as ViewerData } from "coral-stream/__generated__/UserPopoverContainer_viewer.graphql";

import UserIgnorePopoverContainer from "../UserIgnorePopover/UserIgnorePopoverContainer";
import UserPopoverOverviewContainer from "./UserPopoverOverviewContainer";

type View = "OVERVIEW" | "IGNORE";

interface Props {
  onDismiss: () => void;
  user: UserData;
  viewer: ViewerData | null;
}

export const UserPopoverContainer: FunctionComponent<Props> = ({
  user,
  viewer,
  onDismiss,
}) => {
  const [view, setView] = useState<View>("OVERVIEW");
  const onIgnore = useCallback(() => setView("IGNORE"), [setView]);
  return (
    <div>
      {view === "OVERVIEW" ? (
        <UserPopoverOverviewContainer
          user={user}
          viewer={viewer}
          onIgnore={onIgnore}
        />
      ) : (
        <UserIgnorePopoverContainer user={user} onDismiss={onDismiss} />
      )}
    </div>
  );
};

const enhanced = withFragmentContainer<Props>({
  viewer: graphql`
    fragment UserPopoverContainer_viewer on User {
      ...UserPopoverOverviewContainer_viewer
    }
  `,
  user: graphql`
    fragment UserPopoverContainer_user on User {
      ...UserPopoverOverviewContainer_user
      ...UserIgnorePopoverContainer_user
    }
  `,
})(UserPopoverContainer);

export default enhanced;
