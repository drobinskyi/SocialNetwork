import preloader from '../../../assets/images/loader.gif'

let Preloader = (props) => {
    return <div>
        <img src={preloader} alt="preloader" style={{height: '120px', width: '120px'}} />
    </div>
}

export default Preloader;