import { Injectable } from '@angular/core';

import { Http, HttpModule } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { Constants } from '../constants/constants.service';

@Injectable()
export class ExpandedviewService {

    constructor( private http: Http, private constant: Constants ) { }

    loadExpandedView( statusCode: string, personId: string, piechartIndex: string ): Observable<JSON> {
        debugger;
        var params = {
            sponsorCode: statusCode,
            personId: personId,
            pieChartIndex: piechartIndex
        };
        var expandedViewUrl = this.constant.expandedViewUrl;
        return this.http.post( expandedViewUrl, params )
            .map( res => res.json()
            )
            .catch( error => {
                console.error( error.message || error );
                return Observable.throw( error.message || error )
            } );
    }

    loadExpandedSummaryView( personId: string, researchSummaryIndex: string ): Observable<JSON> {
        debugger;
        var params = {
            personId: personId,
            researchSummaryIndex: researchSummaryIndex
        };
        var expandedSummaryViewUrl = this.constant.expandedSummaryViewUrl;
        return this.http.post( expandedSummaryViewUrl, params )
            .map( res => res.json()
            )
            .catch( error => {
                console.error( error.message || error );
                return Observable.throw( error.message || error )
            } );
    }

}
