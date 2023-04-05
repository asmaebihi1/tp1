import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategorieComptableCreateComponent } from './view/categoriecomptables/categorieComptable-create/categorieComptable-create.component';
import { CategoriecomptableListComponent } from './view/categoriecomptables/categorieComptable-list/categoriecomptable-list.component';
import { CategorieDeclarationCreateComponent } from './view/categoriedeclarations/categoriedeclaration-create/categoriedeclaration-create.component';
import { CategorieDeclarationListComponent } from './view/categoriedeclarations/categoriedeclaration-list/categoriedeclaration-list.component';
import { CategorieSocieteCreateComponent } from './view/categoriesocietes/categoriesociete-create/categoriesociete-create.component';
import { CategoriesocieteListComponent } from './view/categoriesocietes/categoriesociete-list/categoriesociete-list.component';
import { DeclarationFactureCreateComponent } from './view/declarationfactures/declarationfacture-create/declarationfacture-create.component';
import { DeclarationfactureListComponent } from './view/declarationfactures/declarationfacture-list/declarationfacture-list.component';
import { DeclarationirCreateComponent } from './view/declarationirs/declarationir-create/declarationir-create.component';
import { DeclarationirListComponent } from './view/declarationirs/declarationir-list/declarationir-list.component';
import { DeclarationirdetailleCreateComponent } from './view/declarationirsdetailles/declarationirdetaille-create/declarationirdetaille-create.component';
import { DeclarationirdetailleListComponent } from './view/declarationirsdetailles/declarationirdetaille-list/declarationirdetaille-list.component';
import { DemandedeclarationdetailleCreateComponent } from './view/demandedeclarationsdetailles/demandedeclarationdetaille-create/demandedeclarationdetaille-create.component';
import { DemandedeclarationdetailleListComponent } from './view/demandedeclarationsdetailles/demandedeclarationdetaille-list/demandedeclarationdetaille-list.component';
import { EmployeCreateComponent } from './view/employes/employe-create/employe-create.component';
import { EmployeListComponent } from './view/employes/employe-list/employe-list.component';
import { EtatdeclarationCreateComponent } from './view/etatdeclarations/etatdeclaration-create/etatdeclaration-create.component';
import { EtatdeclarationListComponent } from './view/etatdeclarations/etatdeclaration-list/etatdeclaration-list.component';
import { PaymentdeclarationCreateComponent } from './view/paymentdeclarations/paymentdeclaration-create/paymentdeclaration-create.component';
import { PaymentdeclarationListComponent } from './view/paymentdeclarations/paymentdeclaration-list/paymentdeclaration-list.component';
import { ComptableCreateComponent } from './view/comptables/comptable-create/comptable-create.component';
import { ComptableListComponent } from './view/comptables/comptable-list/comptable-list.component';
import { DemandedeclarationCreateComponent } from './view/demandedeclarations/demandedeclaration-create/demandedeclaration-create.component';
import { DemandedeclarationListComponent } from './view/demandedeclarations/demandedeclaration-list/demandedeclaration-list.component';
import { TypeFactureCreateComponent } from './view/typeFactures/type-facture-create/type-facture-create.component';
import { TypeFactureListComponent } from './view/typeFactures/type-facture-list/type-facture-list.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CategorieComptableCreateComponent,
    CategoriecomptableListComponent,
    CategorieDeclarationCreateComponent,
    CategorieDeclarationListComponent,
    CategorieSocieteCreateComponent,
    CategoriesocieteListComponent,
    DeclarationFactureCreateComponent,
    DeclarationfactureListComponent,
    DeclarationirCreateComponent,
    DeclarationirListComponent,
    DeclarationirdetailleCreateComponent,
    DeclarationirdetailleListComponent,
    DemandedeclarationdetailleCreateComponent,
    DemandedeclarationdetailleListComponent,
    EmployeCreateComponent,
    EmployeListComponent,
    EtatdeclarationCreateComponent,
    EtatdeclarationListComponent,
    PaymentdeclarationCreateComponent,
    PaymentdeclarationListComponent,
    ComptableCreateComponent,
    ComptableListComponent,
    DemandedeclarationCreateComponent,
    DemandedeclarationListComponent,
    TypeFactureCreateComponent,
    TypeFactureListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
