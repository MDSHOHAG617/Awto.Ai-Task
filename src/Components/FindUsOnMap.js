import React from 'react';

const FindUsOnMap = () => {
    return (
        <div>
            {/* google map location */}
            <div className=''>
                <h1 className='font-bold text-4xl mb-4 '>Find us on google map</h1>
                <p className=' w-10/12 mx-auto mb-6'>awto.ai
                    WMC2+596, Phase 3, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102, India</p>
                    </div>

                    <img className='w-48 mx-auto mb-6' src="https://i.pinimg.com/originals/51/1e/f3/511ef38be03fa1249c9afcad9c9a3afc.gif" />
            <iframe className='mx-auto mb-8' width="90%" height="550px" id="gmap_canvas" src="https://maps.google.com/maps?q=Awto%20ai&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
    );
};

export default FindUsOnMap;