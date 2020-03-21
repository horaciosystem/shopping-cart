import React from 'react'

import IssueListItem from './IssueListItem'


interface Props {
}

const ProductsList = React.FC<Props>({  }) => {
  const renderedIssues = issues.map(issue => (
    <li key={issue.id}>
      <IssueListItem {...issue} showIssueComments={showIssueComments} />
    </li>
  ))

  return <ul className={styles.issuesList}>{renderedIssues}</ul>
}

export default ProductsList