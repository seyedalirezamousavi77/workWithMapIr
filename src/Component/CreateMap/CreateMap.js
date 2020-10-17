import Mapir from 'mapir-react-component';

const Map = Mapir.setToken({
    transformRequest: (url) => {
        return {
            url: url,
            headers: { 
          'x-api-key': 'your-api-key', //Mapir api key
               
         'Mapir-SDK': 'reactjs'        
      },
        }
    }
});
