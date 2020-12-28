import React from 'react'

const Article = ({match}) => {
    return (
        <div>
            {match.params.articleId}
        </div>
    )
}

export default Article
