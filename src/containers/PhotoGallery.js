import React from 'react'
import './PhotoGallery.css'
import {Aa, Ab, Ac,
        Ba, Bb, Bc, Bd, Be, Bf,
        Ca, Cb,
        Dc, Dd, De, Df, Dh, Di, Dk, Dl, Dm, Dn, Do, Dp, Dq, Dr, Ds, Dt, Du, Dv, Dw, Dx, Dy,
        Ea, Eb, Ec, Ed, Ee, Ef, Eg,
        Fa, Fb, Fc,
        Ga} from '../photoGalleryImages'

function PhotoGallery() {
    return (
        <div className='photo-gallery'>
            <h3 className="en-font-heading">
                Photo Gallery
            </h3>
            <div className="photo-gallery__container">
                <h4 className="en-font-heading">Teaching at the New Hyde Park location</h4>
                <div className="photo-gallery__container_classroom">
                    <img src= {Aa} alt="" />
                    <img src= {Ab} alt="" />
                    <img src= {Ac} alt="" />
                </div>
                <h4 className="en-font-heading">Teaching at the flushing location</h4>
                <div className="photo-gallery__container_classroom_flushing">
                    <img src= {Ga} alt="" />
                </div>
                <h4 className="en-font-heading">Recreational Acitivies during the Summer Afternoon Session</h4>
                <div className="photo-gallery__container_activities">
                    <img src= {Ba} alt="" />
                    <img src= {Bb} alt="" />
                    <img src= {Bc} alt="" />
                    <img src= {Bd} alt="" />
                    <img src= {Be} alt="" />
                    <img src= {Bf} alt="" />

                </div>
                <h4 className="en-font-heading">End of term parties!</h4>
                <div className="photo-gallery__container_parties">
                    <img src= {Ca} alt="" />
                    <img src= {Cb} alt="" />
                </div>
                <h4 className="en-font-heading">Other Teaching</h4>
                <div className="photo-gallery__container_teaching">
                    <img src= {Ea} alt="" />
                    <img src= {Eb} alt="" />
                    <img src= {Ec} alt="" />
                    <img src= {Ed} alt="" />
                    <img src= {Ee} alt="" />
                    <img src= {Ef} alt="" />
                    <img src= {Eg} alt="" />
                </div>
                <h4 className="en-font-heading">At the SUNY Old Westbury Location</h4>
                <div className="photo-gallery__container_old-westbury">
                    {/* (Dg and Dj omitted) Groupings: 
                        cdf (long overall classroom shots yellow-ish), 
                        ekv (Single person spotlight)
                        hy (with teacher)
                        iqlmp (students together purple 1)
                        nor (me lol)
                        stuwx (other room) */}
                    <div className="photo-gallery__container-old-westbury_group1">
                        <img src= {Dc} id = "Dc" alt="" />
                        <img src= {Dd} id = "Dd"alt="" />
                        <img src= {Df} id = "Df" alt="" />
                    </div>
                    <div className="photo-gallery__container-old-westbury_group2">
                        <img src= {De} id = "De" alt="" />
                        <img src= {Dk} id = "Dk" alt="" />
                        <img src= {Dv} id = "Dv" alt="" />
                    </div>
                    <div className="photo-gallery__container-old-westbury_group3">
                        <img src= {Dh} id = "Dh" alt="" />
                        <img src= {Dy} id = "Dy" alt="" />
                    </div>
                    <div className="photo-gallery__container-old-westbury_group4">
                        <img src= {Di} id = "Di" alt="" />
                        <img src= {Dq} id = "Dq" alt="" />
                        <img src= {Dl} id = "Dl" alt="" />
                        <img src= {Dm} id = "Dm" alt="" />
                        <img src= {Dp} id = "Dp" alt="" />
                    </div>
                    <div className="photo-gallery__container-old-westbury_group5">
                        <img src= {Dn} id = "Dn" alt="" />
                        <img src= {Do} id = "Do" alt="" />
                        <img src= {Dr} id = "Dr" alt="" />
                    
                    </div>
                    <div className="photo-gallery__container-old-westbury_group6">    
                        <img src= {Ds} id = "Ds" alt="" />
                        <img src= {Dt} id = "Dt" alt="" />
                        <img src= {Du} id = "Du" alt="" />
                        <img src= {Dw} id = "Dw" alt="" />
                        <img src= {Dx} id = "Dx"alt="" />
                    </div>
                </div>

                <h4 className='en-font-heading'>Accreditations</h4>
                <div className='photo-gallery__container_accreditations photo-gallery__container_classroom'>
                    <img src= {Fa} alt="" />
                    <img src= {Fb} alt="" />
                    <img src= {Fc} alt="" />
                </div>

            </div>

        </div>
    )
}

export default PhotoGallery
