"use client";
import BalanceTransfer from "@/components/Services/Loans/BalanceTransfer/BalanceTransfer";
import BusinessLoan from "@/components/Services/Loans/BusinessLoan/BusinessLoan";
import CGTMSE from "@/components/Services/Loans/CGTMSE/CGTMSE";
import DebtConsolidation from "@/components/Services/Loans/DebtConsolidation/DebtConsolidation";
import HomeLoan from "@/components/Services/Loans/HomeLoan/HomeLoan";
import LoanAgainstRental from "@/components/Services/Loans/LoanAgainstRental/LoanAgainstRental";
import Mortgage from "@/components/Services/Loans/Mortagage/Mortgage";
import NonResidentialLoan from "@/components/Services/Loans/NonResidentialLoan/NonResidentialLoan";
import NRILoan from "@/components/Services/Loans/NRILoan/NRILoan";
import OverdraftFacility from "@/components/Services/Loans/OverdraftFacility/OverdraftFacility";
import PersonalLoan from "@/components/Services/Loans/PersonalLoan/PersonalLoan";
import WorkingCapital from "@/components/Services/Loans/WorkingCapital/WorkingCapital";
import { useParams } from "next/navigation"

export default function (){
    const {pageName} = useParams();
    return (
        <>
        {pageName === "home-loan" && <HomeLoan/>}
        {pageName === "loan-services-for-nris" && <NRILoan/>}
        {pageName === "loan-against-property" && <Mortgage/>}
        {pageName === "balance-transfer-and-top-up" && <BalanceTransfer/>}
        {pageName === "non-residential-premises-loan" && <NonResidentialLoan/>}
        {pageName === "loan-against-rentals" && <LoanAgainstRental/>}
        {pageName === "debt-consolidation" && <DebtConsolidation/>}
        {pageName === "overdraft-facility" && <OverdraftFacility/>}
        {pageName === "working-capital" && <WorkingCapital/>}
        {pageName === "business-loan" && <BusinessLoan/>}
        {pageName === "personal-loan" && <PersonalLoan/>}
        {pageName === "cgtmse" && <CGTMSE/>}
        </>
    )
}