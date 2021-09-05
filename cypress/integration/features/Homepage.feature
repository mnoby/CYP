Feature: BDD Atlas Homepage Color Quote

I want to be able to submit quote in various Color

@TC001 @BlueColor
Scenario: I want to be able to submit a Blue Quote
        Given I open BDD Atlas Web
        When I type a quote: Ayumu tenanan ora editan
        And I choose the Blue Color
        Then I verify quote submitted "Blue" and "Ayumu tenanan ora editan"
        Then I verify quote has been deleted : Ayumu

@TC002 @AllColor
Scenario Outline: Scenario Outline name: I want to be able to submit a <color> Quote
        Given I open BDD Atlas Web
        When I type a quote: Ayumu tenanan ora editan
        And I choose the <color> Color
        Then I verify quote submitted "<color>" and "Ayumu tenanan ora editan"
        Then I verify quote has been deleted : Ayumu

        Examples:
            | color |
            | White |
            | Yellow |
            | Cyan |