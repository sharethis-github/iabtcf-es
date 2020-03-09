import {SequenceVersionMap, SVMItem} from './SequenceVersionMap';
import {Segments, Fields} from '../../model';

export class FieldSequence implements SequenceVersionMap {

  public readonly '1': SVMItem = {
    [Segments.core]: [
      Fields.version,
      Fields.created,
      Fields.lastUpdated,
      Fields.cmpId,
      Fields.cmpVersion,
      Fields.consentScreen,
      Fields.consentLanguage,
      Fields.vendorListVersion,
      Fields.purposeConsents,
      Fields.vendorConsents,
    ],
  };
  public readonly '2': SVMItem = {
    [Segments.core]: [
      Fields.version,
      Fields.created,
      Fields.lastUpdated,
      Fields.cmpId,
      Fields.cmpVersion,
      Fields.consentScreen,
      Fields.consentLanguage,
      Fields.vendorListVersion,
      Fields.policyVersion,
      Fields.isServiceSpecific,
      Fields.useNonStandardStacks,
      Fields.specialFeatureOptIns,
      Fields.purposeConsents,
      Fields.purposeLegitimateInterests,
      Fields.purposeOneTreatment,
      Fields.publisherCountryCode,
      Fields.vendorConsents,
      Fields.vendorLegitimateInterests,
      Fields.publisherRestrictions,
    ],
    [Segments.publisherTC]: [
      Fields.publisherConsents,
      Fields.publisherLegitimateInterests,
      Fields.numCustomPurposes,
      Fields.publisherCustomConsents,
      Fields.publisherCustomLegitimateInterests,
    ],
    [Segments.vendorsAllowed]: [
      Fields.vendorsAllowed,
    ],
    [Segments.vendorsDisclosed]: [
      Fields.vendorsDisclosed,
    ],
  };

}
