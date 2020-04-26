# Software Requirements Specification for Savable project

------

## Outline

### 1 . Introduction

	1.1 Purpose
	
	1.2 Scope
	
	1.3 Glossary
	
	1.4 References
	
	1.5 Overview
	
	1.6 Definitions, Acronyms and Abbreviations

### 2. Overall Description

	2.1 Current solution
	
	2.2 Product perspective
	
	2.3 Product functions
	
	2.4 User Profiles
	
	2.5 Constraints
	
	2.6 Assumptions and dependencies
	
	2.7 Use cases

### 3. Specific Requirements

	3.1 External interfaces
	
	3.2 Functions
	
	3.3 Usability requirements
	
	3.4 Performance requirements
	
	3.5 Logical database requirements
	
	3.6 System
	
	3.7 Design constraints
	
	3.8 Standard compliance
	
	3.9 Software System attributes

### 4. Supporting Information

----

## 1 Introduction

 **1.1 Purpose**

This document specifies the Software Requirements Specification (SRS) for the Savable application. It describes scope of the system, both functional and non-functional requirements for the software, design constraints and system interfaces.

**1.2 Scope**

The Savable application app will help you to list what you want to do before some events of your life, to predict how much money you need to complete it and remind you what you need to prepare.

**1.3 Glossary**

The glossary defines the key terms and concepts mentioned and used in this SRS.

| **Word** | **Explanation** |
| --- | --- |
| Client | The part of the application that runs on the user&#39;s web browser. Maintain physical connection to the host system. |
| User | Any person who uses the system and is registered within the system. It means that he or she has the user login. |
| Authorized user | The user who has logged into the system and has a right to perform some operation. The system &quot;knows&quot; the identity of the user and permission that are granted to this user |
| Authenticated user | The user who has logged into the system. The system &quot;knows&quot; the identity of the user |
| Server storage | The Database of the SA, where the app stores all its users data. |
| Resource | The concept is required to carry out the user tasks. |

**1.4 References**

The following table defines the list of all documents referenced elsewhere in these requirements.

| **Reference and Document Title** | **Applicable Reference and Version** |
| --- | --- |
| Software Requirement Specification for Project Management System project | SampleRequirementsSpec.pdf |
| Example Software Requirements Specification Document for ReqView | [Example Software Requirements Specification Document for ReqView](https://www.reqview.com/papers/ReqView-Example_Software_Requirements_Specification_SRS_Document.pdf) |

**1.5 Overview**

Chapter 2 defines the general product functions, intended purposes, constraints to be respected and the assumption made in order to define requirements. Chapter 3 specifies functional, usability, performance and other requirements. Chapter 4 contains index, appendices and supporting information.

**1.6 Definitions, Acronyms and Abbreviations**

The following table explains the terms and abbreviations used in the document.

| **Term/Abbreviation** | **Explanation** |
| --- | --- |
| SA | Savable Application |
| UI | User Interface |
| RAM | Random Access Memory |
| SRS | Software Requirements Specification |

## 2. Overall Description

**2.1 Current problems**

People are hard to manage and save up enough money for their dreams, they usually spend over their budget because of many attractive items while you&#39;re surfing the web, Facebook, Instagram, etc. These days, it is hard to remember and focus on what you wished to be done. It&#39;s also hard to keep track of how far you have done or what you need to prepare.

**2.2 Product Perspective**

Savable is an application that helps users keep track of their money flow. It helps to save money and create plans to accomplish the set goals. This application is the combination of List-to-do and financial spending.

**2.3 Product functions**

The Savable application:

- Helps users to list what they want to do before some events of their life
- Predicts how much money users will need to complete their goals
- Reminds what users need to prepare for their goals
- Provides wishlists
- Organizes user&#39;s plans
- Checks the progress of completion of the plans

**2.4 Users Profiles**

The application is intended to be used by a user. The following is a profile of a user with own responsibility and role in the application:

| **User** | **Functions and Responsibilities** | **Source** |
| --- | --- | --- |
| Client | Responsible for creating wishlists and the purposes of using money, adding items, modifying goals and deleting them when achieved. | #1 Application Description |

**2.5 Constraints**

The document represents a study project, not a real-life SRS, and misses detailed description and requirement for many areas. It gives only directions and requirement templates for creating an application.

**2.6 Assumptions and dependencies**

The SA stores all operational and personal data in the online cloud storage. There is no requirement for a specific data storage system. This app can only be accessed by web browsers.

**2.7 Use Cases**

Use Case model defines the users of the system (actors) and specifies the activities performed by a particular type of user. The use case model is decomposed into functional areas and each functional area comprises use cases. Each use case describes how the system shall be used by the actors to achieve a specific business goal or function.

The use cases do not capture non-functional requirements of the system. In writing use cases we use only minimal level of details: a brief use case. It consists of a few sentences summarizing the use case

![](RackMultipart20200426-4-1nbrmge_html_7b80c940a73ba820.png)

_Fig. 1 Savable Use Cases_

## 3 Specific Requirements

**3.1 External interfaces**

**Requirement ID** R1.01

**Group** Interface\UI

**Description** This application provide UI for clients to interact with all available functions.

**Priority** 1

**Source**

**References**

**3.2 Functions**

| **Requirement ID** | R2.01 |
| --- | --- |
| **Group** | Functions\User profiles |
| **Description** | The system shall provide the concept of User Profile. The user profile contains the user-specific configurable parameters of the system. The user profile is associated with one and only one user that is registered in the system (has a user name and a password). |
| **Priority**| 1 |
| **Source**| |
| **Risk** | C |
| **References** | UC1.02 |

**Requirement ID** R2.02

**Group** Functions\Storage

**Description** This app shall stores all personal information of

clients in the server database

**Priority** 1

**Source**

**Risk** C

**References**

**Requirement ID** R2.03

**Group** Functions\Change password

**Description** The system shall provide the authenticated user the

ability to change his or her password and to store the change

**Priority** 1

**Source**

**Risk** C

**References**

**Requirement ID** R2.04

**Group** Functions\Edit

**Description** The user must be able to change his or her profile\

and save the changes

**Priority** 1

**Source**

**Risk** C

**References**

**Requirement ID** R2.05

**Group** Functions\Application Login

**Description** The user must login to the system by specifying his

or her name and password before he or she can work with the system. If the password is invalid or the user name does not exist in the system, the user is not allowed to login and must enter the name and password again. There is no limit of the login tries. After the login the user becomes the authenticated and authorized user

**Priority** 1

**Source**

**Risk** C

**References** UC1.01

**3.3 Usability requirements**

**Requirement ID** R3.01

**Group** Usability\Language

**Description** All application message, texts must be in English

**Priority** 1

**Source**

**Risk** C

**References**

**3.4 Performance requirements**

**Requirement ID** R4.01

**Group** Performance\Internet connection

**Description** This web-based application does not require a fast

but a reliable Internet connection

**Priority** 1

**Source**

**Risk** M

**References**

**Requirement ID** R4.02

**Group** Performance\Memory consumption

**Description** The web client will not take more than 500MB of

RAM depends on the user&#39;s web browser.

**Priority** 1

**Source**

**Risk** M

**References**

**3.5 Logical database requirements**

**Requirement ID** R5.01

**Group** Logical database\Data

**Description** The application shall encrypt the persistent

application data.

**Priority** 1

**Source**

**Risk** M

**References**

**3.6 System**

**Requirement ID** R6.01

**Group** System\Supported web browser

**Description** The client of the application shall run on Google Chrome 60 or higher, Mozilla Firefox 70 or higher,

Opera 45 or higher, Safari 11 or higher, Microsoft

Edge 45 or higher.

**Priority** 1

**Source**

**Risk** C

**References**

**3.7 Design constraints**

**Requirement ID** R7.01

**Group** Design constraints\Availability

**Description** The system shall be available for use at 24 hours a

day, 7 days a week. The data storage shall be

available for use 24 hours a day, 7 days a week.

**Priority** 1

**Source**

**Risk** C

**References**

**3.8 Standard compliance**

**Requirement ID** R8.01

**Group** Standard compliance\Text

**Description** All texts displayed on the SA shall be encoded as

Unicode.

**Priority** 1

**Source**

**Risk** C

**References**

**3.9 Software System attributes**

**Requirement ID** R9.01

**Group** Software System attributes\Security

**Description** The application shall not send any data to

third-party user or organization.

**Priority** 1

**Source** DEMO-SRS-176

**Risk** C

**References**

**Requirement ID** R9.02

**Group** Software System attributes\Sanitization

**Priority** The application shall sanitize any data input or

imported by users.

**Source** DEMO-SRS-199

**Risk** C

**References**

## 4. Supporting Information

Updating....

