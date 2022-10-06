import { Link } from 'react-router-dom';


export default function Post(props) {
    return (
        <div className='container'>
        <div className="card " >
            <div className="card-header">
                {
                    (!props.preview) ?
                    (
                        <h2 >{ props.post.title }</h2>
                    )
                    :
                    <Link to={`/profile/${props.post.id}`}>{ props.post.title }</Link>
                }
            </div>
            {
                (!props.preview) ?
                (
                    <div className="card-body">
                        <p>{ props.post.body }</p>
                    </div>
                )
                :
                ''
            }
        </div>
        </div>
    )
}