import { gql } from "apollo-angular";

const LOCATIONS = gql`
query {
    locations {
        id
        type
        geometry {
            type
            ...on 
            GeometryLineDTO {
                lineCoordinates
            }
            ...on 
            GeometryPointDTO {
                pointCoordinates
            }
            ...on 
            GeometryPolygonDTO {
                polygonCoordinates
            }
        }
        properties {
            name
        }
    }
}
`

export { LOCATIONS };