import { Dimensions } from 'react-native'
import axios from 'axios'

const screen = {
  width: Dimensions.get('screen').width,
  height: Dimensions.get('screen').height
}

const margin = {
  m1: Dimensions.get('screen').width * .05,
  m2: Dimensions.get('screen').width * .1,
  m3: Dimensions.get('screen').width * .15,
  m4: Dimensions.get('screen').width * .2,
  m5: Dimensions.get('screen').width * .25,
}

const url = "https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/Coronavirus_2019_nCoV_Cases/FeatureServer/1/query?where=UPPER(Country_Region)%20like%20%27%25INDONESIA%25%27&outFields=Last_Update,Recovered,Deaths,Confirmed&returnGeometry=false&outSR=4326&f=json"
const client = axios.create({ baseURL: url })

export { screen, margin, client }