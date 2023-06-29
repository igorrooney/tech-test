import { CustomPatient } from "@/types/custom-fhir"

export type FormatItemType = {
  firstName: string | null;
  lastName: string | null;
  dob: string | null;
  gender: string | null;
  mobile: string | null;
  email: string | null;
  city: string | null;
  postCode: string | null;
  street: string | null;
  pmi: string | null;
  nhs: string | null;
  tags: string[];
  disabled: boolean;
}

export const formatData = (data: CustomPatient[] | null) => {
  if (!data) return

  const formattedData = data.reduce((acc, patient) => {
    const formattedPatient = {
      firstName: patient.name && patient.name[0].given && patient.name[0].given[0] || null,
      lastName: patient.name && patient.name[0].family || null,
      dob: patient.birthDate || null,
      gender: patient.gender || null,
      mobile: patient.telecom?.find(elem => elem.system === 'phone')?.value || null,
      email: patient.telecom?.find(elem => elem.system === 'email')?.value || null,
      city: patient.address && patient.address[0].city || null,
      postCode: patient.address && patient.address[0].postalCode || null,
      // street: patient.address && patient.address[0].line?.join(' ') || null, // two versions of address, not sure which one I should use
      street: patient.address && patient.address[0].line && patient.address[0].line[0] || null,
      /* 
        I didn't find value for Private Mortgage Insurance.
        Use Patient internal identifier 
      */
      pmi: patient.identifier?.find(elem => (
        elem.type?.coding &&
        elem.type?.coding[0].display === 'Patient internal identifier'
      ))?.value || null,
      // National Health Plan Identifier
      nhs: patient.identifier?.find(elem => (
        elem.type?.coding &&
        elem.type?.coding[0].display === 'National Health Plan Identifier'
      ))?.value || null,
      tags: patient.user.tags,
      disabled: patient.user.disabled
    }
    return [...acc, formattedPatient]
  }, [] as FormatItemType[])

  return formattedData;
};
