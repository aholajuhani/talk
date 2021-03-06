import { Localized } from "fluent-react/compat";
import React, { FunctionComponent } from "react";
import { graphql } from "react-relay";

import withFragmentContainer from "coral-framework/lib/relay/withFragmentContainer";
import { UserTagsContainer_comment as CommentData } from "coral-stream/__generated__/UserTagsContainer_comment.graphql";
import { Tag } from "coral-ui/components";

interface Props {
  comment: CommentData;
  className?: string;
}

const UserTagsContainer: FunctionComponent<Props> = props => {
  const { comment } = props;
  const staffTag = comment.tags.find(t => t.code === "STAFF");
  return (
    <>
      {staffTag && (
        <Localized id="comments-staffTag">
          <Tag className={props.className}>Staff</Tag>
        </Localized>
      )}
    </>
  );
};

const enhanced = withFragmentContainer<Props>({
  comment: graphql`
    fragment UserTagsContainer_comment on Comment {
      tags {
        code
      }
    }
  `,
})(UserTagsContainer);

export default enhanced;
