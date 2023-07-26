import './RecetteDetails.scss'

const RecetteDetails = () => {
    return (
        <>
            <div className='main'>
                <div className='title'>TITLE</div>
                <div className='body'>
                    <div className='left'>
                        <img src="" alt=""/>
                    </div>
                    <div className='right'>
                        <div className='info'>
                            <div className='ingredients-list'>
                                <ul>
                                    <li>1 oeuf</li>
                                    <li>500g farine</li>
                                    <li>200g sucre</li>
                                    <li>50cl eau</li>
                                </ul>
                            </div>
                            <div className='details'>
                                <div className='time'>
                                    1h20min
                                </div>
                                <div className='level'>
                                    level
                                </div>
                                <div className='tags'>
                                    <div className='tag'>#crepe</div>
                                    <div className='tag'>#crepe</div>
                                    <div className='tag'>#crepe</div>
                                </div>
                                <div className='portion'>
                                    portion
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecetteDetails
