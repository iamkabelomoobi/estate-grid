/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Date: { input: any; output: any };
};

export type AddPropertyMediaInput = {
  media: Array<AddPropertyMediaItemInput>;
};

export type AddPropertyMediaItemInput = {
  isPrimary?: InputMaybe<Scalars["Boolean"]["input"]>;
  order?: InputMaybe<Scalars["Int"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  url: Scalars["String"]["input"];
};

export type Admin = {
  __typename?: "Admin";
  id?: Maybe<Scalars["ID"]["output"]>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars["String"]["output"]>;
};

export type AdminAnalyticsOverview = {
  __typename?: "AdminAnalyticsOverview";
  activeSubscriptions?: Maybe<Scalars["Int"]["output"]>;
  openReports?: Maybe<Scalars["Int"]["output"]>;
  pendingProperties?: Maybe<Scalars["Int"]["output"]>;
  totalInquiries?: Maybe<Scalars["Int"]["output"]>;
  totalProperties?: Maybe<Scalars["Int"]["output"]>;
};

export type AdminUpdateInput = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type AffordabilityCalculatorInput = {
  affordabilityRatio?: InputMaybe<Scalars["Float"]["input"]>;
  annualInterestRate: Scalars["Float"]["input"];
  deposit?: InputMaybe<Scalars["Float"]["input"]>;
  monthlyDebtRepayments?: InputMaybe<Scalars["Float"]["input"]>;
  monthlyExpenses?: InputMaybe<Scalars["Float"]["input"]>;
  monthlyIncome: Scalars["Float"]["input"];
  termMonths?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AffordabilityCalculatorResult = {
  __typename?: "AffordabilityCalculatorResult";
  disposableIncome?: Maybe<Scalars["Float"]["output"]>;
  estimatedPurchasePrice?: Maybe<Scalars["Float"]["output"]>;
  maxAffordableRepayment?: Maybe<Scalars["Float"]["output"]>;
  maxLoanAmount?: Maybe<Scalars["Float"]["output"]>;
};

export type Agency = {
  __typename?: "Agency";
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  licenseNumber?: Maybe<Scalars["String"]["output"]>;
  logo?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  ownerId?: Maybe<Scalars["ID"]["output"]>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
};

export type AgencyAdvertisingRequest = {
  __typename?: "AgencyAdvertisingRequest";
  agencyName?: Maybe<Scalars["String"]["output"]>;
  budget?: Maybe<Scalars["String"]["output"]>;
  contactEmail?: Maybe<Scalars["String"]["output"]>;
  contactPhone?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
  rejectionReason?: Maybe<Scalars["String"]["output"]>;
  requesterEmail?: Maybe<Scalars["String"]["output"]>;
  requesterName?: Maybe<Scalars["String"]["output"]>;
  reviewedAt?: Maybe<Scalars["Date"]["output"]>;
  reviewedById?: Maybe<Scalars["ID"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
  userId?: Maybe<Scalars["ID"]["output"]>;
  websiteUrl?: Maybe<Scalars["String"]["output"]>;
};

export type AgencyAdvertisingRequestFilterInput = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type AgencyAdvertisingRequestInput = {
  agencyName: Scalars["String"]["input"];
  budget?: InputMaybe<Scalars["String"]["input"]>;
  contactEmail: Scalars["String"]["input"];
  contactPhone?: InputMaybe<Scalars["String"]["input"]>;
  message?: InputMaybe<Scalars["String"]["input"]>;
  websiteUrl?: InputMaybe<Scalars["String"]["input"]>;
};

export type AgencyAdvertisingRequestStatusInput = {
  rejectionReason?: InputMaybe<Scalars["String"]["input"]>;
  status: Scalars["String"]["input"];
};

export type AgencyInput = {
  licenseNumber?: InputMaybe<Scalars["String"]["input"]>;
  logo?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
  ownerId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type AgencyUpdateInput = {
  licenseNumber?: InputMaybe<Scalars["String"]["input"]>;
  logo?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type AgentApplication = {
  __typename?: "AgentApplication";
  applicantEmail?: Maybe<Scalars["String"]["output"]>;
  applicantName?: Maybe<Scalars["String"]["output"]>;
  city?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  experience?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  licenseNumber?: Maybe<Scalars["String"]["output"]>;
  motivation?: Maybe<Scalars["String"]["output"]>;
  phone?: Maybe<Scalars["String"]["output"]>;
  rejectionReason?: Maybe<Scalars["String"]["output"]>;
  reviewedAt?: Maybe<Scalars["Date"]["output"]>;
  reviewedById?: Maybe<Scalars["ID"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
  userId?: Maybe<Scalars["ID"]["output"]>;
};

export type AgentApplicationFilterInput = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type AgentApplicationInput = {
  city?: InputMaybe<Scalars["String"]["input"]>;
  experience?: InputMaybe<Scalars["String"]["input"]>;
  licenseNumber?: InputMaybe<Scalars["String"]["input"]>;
  motivation?: InputMaybe<Scalars["String"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
};

export type AgentSubscription = {
  __typename?: "AgentSubscription";
  agentId?: Maybe<Scalars["ID"]["output"]>;
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  expiresAt?: Maybe<Scalars["Date"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  isActive?: Maybe<Scalars["Boolean"]["output"]>;
  plan?: Maybe<SubscriptionPlan>;
  planId?: Maybe<Scalars["ID"]["output"]>;
  startsAt?: Maybe<Scalars["Date"]["output"]>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
};

export type Amenity = {
  __typename?: "Amenity";
  category?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

export type AmenityFilterInput = {
  category?: InputMaybe<Scalars["String"]["input"]>;
};

export type AmenityInput = {
  category: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
};

export type AmenityUpdateInput = {
  category?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type Article = {
  __typename?: "Article";
  authorId?: Maybe<Scalars["ID"]["output"]>;
  authorName?: Maybe<Scalars["String"]["output"]>;
  category?: Maybe<ArticleCategory>;
  categoryId?: Maybe<Scalars["ID"]["output"]>;
  content?: Maybe<Scalars["String"]["output"]>;
  coverImageUrl?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  publishedAt?: Maybe<Scalars["Date"]["output"]>;
  slug?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  summary?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
};

export type ArticleCategory = {
  __typename?: "ArticleCategory";
  code?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  slug?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
};

export type ArticleFilterInput = {
  categorySlug?: InputMaybe<Scalars["String"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  q?: InputMaybe<Scalars["String"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type ArticleInput = {
  categoryId: Scalars["ID"]["input"];
  content: Scalars["String"]["input"];
  coverImageUrl?: InputMaybe<Scalars["String"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  summary?: InputMaybe<Scalars["String"]["input"]>;
  title: Scalars["String"]["input"];
};

export type ArticleUpdateInput = {
  categoryId?: InputMaybe<Scalars["ID"]["input"]>;
  content?: InputMaybe<Scalars["String"]["input"]>;
  coverImageUrl?: InputMaybe<Scalars["String"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  summary?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type AttorneyFilterInput = {
  city?: InputMaybe<Scalars["String"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  q?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type AttorneyProfile = {
  __typename?: "AttorneyProfile";
  city?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  createdById?: Maybe<Scalars["ID"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  firmName?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  imageUrl?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  phone?: Maybe<Scalars["String"]["output"]>;
  publishedAt?: Maybe<Scalars["Date"]["output"]>;
  slug?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
  websiteUrl?: Maybe<Scalars["String"]["output"]>;
};

export type AttorneyProfileInput = {
  city: Scalars["String"]["input"];
  description?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  firmName?: InputMaybe<Scalars["String"]["input"]>;
  imageUrl?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
  phone?: InputMaybe<Scalars["String"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  websiteUrl?: InputMaybe<Scalars["String"]["input"]>;
};

export type AttorneyProfileUpdateInput = {
  city?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  firmName?: InputMaybe<Scalars["String"]["input"]>;
  imageUrl?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  websiteUrl?: InputMaybe<Scalars["String"]["input"]>;
};

export type BondCalculatorInput = {
  annualInterestRate: Scalars["Float"]["input"];
  deposit?: InputMaybe<Scalars["Float"]["input"]>;
  propertyPrice: Scalars["Float"]["input"];
  termMonths?: InputMaybe<Scalars["Int"]["input"]>;
};

export type BondCalculatorResult = {
  __typename?: "BondCalculatorResult";
  monthlyRepayment?: Maybe<Scalars["Float"]["output"]>;
  principal?: Maybe<Scalars["Float"]["output"]>;
  totalInterest?: Maybe<Scalars["Float"]["output"]>;
  totalRepayment?: Maybe<Scalars["Float"]["output"]>;
};

export type BuyDetail = {
  __typename?: "BuyDetail";
  developerName?: Maybe<Scalars["String"]["output"]>;
  handoverDate?: Maybe<Scalars["Date"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  isDeveloper?: Maybe<Scalars["Boolean"]["output"]>;
  ownerType?: Maybe<Scalars["String"]["output"]>;
  ownership?: Maybe<Scalars["String"]["output"]>;
  paymentPlan?: Maybe<PaymentPlan>;
  projectName?: Maybe<Scalars["String"]["output"]>;
  propertyId?: Maybe<Scalars["ID"]["output"]>;
  registrationInfo?: Maybe<Scalars["String"]["output"]>;
  roi?: Maybe<Scalars["Float"]["output"]>;
  titleDeedVerified?: Maybe<Scalars["Boolean"]["output"]>;
};

export type BuyDetailInput = {
  developerName?: InputMaybe<Scalars["String"]["input"]>;
  handoverDate?: InputMaybe<Scalars["Date"]["input"]>;
  isDeveloper?: InputMaybe<Scalars["Boolean"]["input"]>;
  ownerType?: InputMaybe<Scalars["String"]["input"]>;
  ownership?: InputMaybe<Scalars["String"]["input"]>;
  projectName?: InputMaybe<Scalars["String"]["input"]>;
  registrationInfo?: InputMaybe<Scalars["String"]["input"]>;
  roi?: InputMaybe<Scalars["Float"]["input"]>;
  titleDeedVerified?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CareerPost = {
  __typename?: "CareerPost";
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  createdById?: Maybe<Scalars["ID"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  employmentType?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  location?: Maybe<Scalars["String"]["output"]>;
  publishedAt?: Maybe<Scalars["Date"]["output"]>;
  slug?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  summary?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
};

export type CareerPostFilterInput = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  location?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  q?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type CareerPostInput = {
  description: Scalars["String"]["input"];
  employmentType?: InputMaybe<Scalars["String"]["input"]>;
  location?: InputMaybe<Scalars["String"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  summary?: InputMaybe<Scalars["String"]["input"]>;
  title: Scalars["String"]["input"];
};

export type CareerPostUpdateInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  employmentType?: InputMaybe<Scalars["String"]["input"]>;
  location?: InputMaybe<Scalars["String"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  summary?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type ContactMessage = {
  __typename?: "ContactMessage";
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  phone?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  subject?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
  userId?: Maybe<Scalars["ID"]["output"]>;
};

export type ContactMessageFilterInput = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type ContactMessageInput = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  message: Scalars["String"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  subject: Scalars["String"]["input"];
};

export type Conversation = {
  __typename?: "Conversation";
  contextId?: Maybe<Scalars["ID"]["output"]>;
  contextType?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  createdById?: Maybe<Scalars["ID"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  lastMessageAt?: Maybe<Scalars["Date"]["output"]>;
  participants?: Maybe<Array<ConversationParticipant>>;
  subject?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
};

export type ConversationFilterInput = {
  contextId?: InputMaybe<Scalars["ID"]["input"]>;
  contextType?: InputMaybe<Scalars["String"]["input"]>;
  includeArchived?: InputMaybe<Scalars["Boolean"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ConversationMessage = {
  __typename?: "ConversationMessage";
  body?: Maybe<Scalars["String"]["output"]>;
  conversationId?: Maybe<Scalars["ID"]["output"]>;
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  senderId?: Maybe<Scalars["ID"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
};

export type ConversationParticipant = {
  __typename?: "ConversationParticipant";
  archivedAt?: Maybe<Scalars["Date"]["output"]>;
  conversationId?: Maybe<Scalars["ID"]["output"]>;
  joinedAt?: Maybe<Scalars["Date"]["output"]>;
  lastReadAt?: Maybe<Scalars["Date"]["output"]>;
  userEmail?: Maybe<Scalars["String"]["output"]>;
  userId?: Maybe<Scalars["ID"]["output"]>;
  userName?: Maybe<Scalars["String"]["output"]>;
};

export type CreateConversationInput = {
  contextId?: InputMaybe<Scalars["ID"]["input"]>;
  contextType?: InputMaybe<Scalars["String"]["input"]>;
  initialMessage?: InputMaybe<Scalars["String"]["input"]>;
  participantUserIds: Array<Scalars["ID"]["input"]>;
  subject?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreatePropertyMediaUploadTargetInput = {
  contentType: Scalars["String"]["input"];
  filename: Scalars["String"]["input"];
  sizeBytes: Scalars["Int"]["input"];
};

export type Inquiry = {
  __typename?: "Inquiry";
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  phone?: Maybe<Scalars["String"]["output"]>;
  property?: Maybe<Property>;
  propertyId?: Maybe<Scalars["ID"]["output"]>;
  source?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
  userId?: Maybe<Scalars["ID"]["output"]>;
};

export type InquiryFilterInput = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  propertyId?: InputMaybe<Scalars["ID"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type InquiryInput = {
  email: Scalars["String"]["input"];
  message?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
  phone?: InputMaybe<Scalars["String"]["input"]>;
  source?: InputMaybe<Scalars["String"]["input"]>;
};

export type InquiryStatusUpdateInput = {
  status: Scalars["String"]["input"];
};

export type Installment = {
  __typename?: "Installment";
  amount?: Maybe<Scalars["Float"]["output"]>;
  dueDate?: Maybe<Scalars["Date"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  percentage?: Maybe<Scalars["Float"]["output"]>;
};

export type JobApplication = {
  __typename?: "JobApplication";
  careerPostId?: Maybe<Scalars["ID"]["output"]>;
  coverLetter?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  fullName?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  phone?: Maybe<Scalars["String"]["output"]>;
  resumeUrl?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
  userId?: Maybe<Scalars["ID"]["output"]>;
};

export type JobApplicationInput = {
  coverLetter?: InputMaybe<Scalars["String"]["input"]>;
  email: Scalars["String"]["input"];
  fullName: Scalars["String"]["input"];
  phone?: InputMaybe<Scalars["String"]["input"]>;
  resumeUrl?: InputMaybe<Scalars["String"]["input"]>;
};

export type ListingBoost = {
  __typename?: "ListingBoost";
  agentId?: Maybe<Scalars["ID"]["output"]>;
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  expiresAt?: Maybe<Scalars["Date"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  property?: Maybe<Property>;
  propertyId?: Maybe<Scalars["ID"]["output"]>;
  startsAt?: Maybe<Scalars["Date"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
};

export type ListingBoostInput = {
  expiresAt: Scalars["Date"]["input"];
  type: Scalars["String"]["input"];
};

export type Location = {
  __typename?: "Location";
  address?: Maybe<Scalars["String"]["output"]>;
  city?: Maybe<Scalars["String"]["output"]>;
  country?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  latitude?: Maybe<Scalars["Float"]["output"]>;
  longitude?: Maybe<Scalars["Float"]["output"]>;
  neighborhood?: Maybe<Scalars["String"]["output"]>;
  postalCode?: Maybe<Scalars["String"]["output"]>;
  state?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
};

export type MarketplaceItem = {
  __typename?: "MarketplaceItem";
  archivedAt?: Maybe<Scalars["Date"]["output"]>;
  category?: Maybe<Scalars["String"]["output"]>;
  city?: Maybe<Scalars["String"]["output"]>;
  condition?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  currency?: Maybe<Scalars["String"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  imageUrlsJson?: Maybe<Scalars["String"]["output"]>;
  isNegotiable?: Maybe<Scalars["Boolean"]["output"]>;
  locationText?: Maybe<Scalars["String"]["output"]>;
  ownerId?: Maybe<Scalars["ID"]["output"]>;
  ownerName?: Maybe<Scalars["String"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
  publishedAt?: Maybe<Scalars["Date"]["output"]>;
  slug?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
};

export type MarketplaceItemFilterInput = {
  category?: InputMaybe<Scalars["String"]["input"]>;
  city?: InputMaybe<Scalars["String"]["input"]>;
  condition?: InputMaybe<Scalars["String"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  maxPrice?: InputMaybe<Scalars["Float"]["input"]>;
  minPrice?: InputMaybe<Scalars["Float"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type MarketplaceItemInput = {
  category: Scalars["String"]["input"];
  city: Scalars["String"]["input"];
  condition?: InputMaybe<Scalars["String"]["input"]>;
  currency?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  imageUrlsJson?: InputMaybe<Scalars["String"]["input"]>;
  isNegotiable?: InputMaybe<Scalars["Boolean"]["input"]>;
  locationText?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<Scalars["Float"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  title: Scalars["String"]["input"];
};

export type MarketplaceItemUpdateInput = {
  category?: InputMaybe<Scalars["String"]["input"]>;
  city?: InputMaybe<Scalars["String"]["input"]>;
  condition?: InputMaybe<Scalars["String"]["input"]>;
  currency?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  imageUrlsJson?: InputMaybe<Scalars["String"]["input"]>;
  isNegotiable?: InputMaybe<Scalars["Boolean"]["input"]>;
  locationText?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<Scalars["Float"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type MarketplaceSavedItem = {
  __typename?: "MarketplaceSavedItem";
  item?: Maybe<MarketplaceItem>;
  itemId?: Maybe<Scalars["ID"]["output"]>;
  savedAt?: Maybe<Scalars["Date"]["output"]>;
  userId?: Maybe<Scalars["ID"]["output"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  /** Attach a user as an agency agent */
  addAgencyAgent?: Maybe<Agency>;
  /** Attach media metadata to a property */
  addPropertyMedia?: Maybe<Property>;
  applyAsAgent?: Maybe<AgentApplication>;
  approveAgentApplication?: Maybe<AgentApplication>;
  /** Approve a property listing */
  approvePropertyForAdmin?: Maybe<Property>;
  archiveArticle?: Maybe<Article>;
  archiveCareerPost?: Maybe<CareerPost>;
  archiveConversation?: Maybe<ConversationParticipant>;
  archiveMarketplaceItem?: Maybe<MarketplaceItem>;
  /** Archive a property listing */
  archiveProperty?: Maybe<Property>;
  archiveStaticPage?: Maybe<StaticPage>;
  calculateAffordability?: Maybe<AffordabilityCalculatorResult>;
  calculateBond?: Maybe<BondCalculatorResult>;
  /** Cancel a viewing */
  cancelViewing?: Maybe<Viewing>;
  /** Complete a confirmed viewing */
  completeViewing?: Maybe<Viewing>;
  /** Confirm a scheduled viewing */
  confirmViewing?: Maybe<Viewing>;
  /** Create an agency */
  createAgency?: Maybe<Agency>;
  /** Create an amenity */
  createAmenity?: Maybe<Amenity>;
  createArticle?: Maybe<Article>;
  createAttorneyProfile?: Maybe<AttorneyProfile>;
  createCareerPost?: Maybe<CareerPost>;
  createConversation?: Maybe<Conversation>;
  /** Create a property inquiry */
  createInquiry?: Maybe<Inquiry>;
  createMarketplaceItem?: Maybe<MarketplaceItem>;
  /** Create a property listing */
  createProperty?: Maybe<Property>;
  /** Create a listing boost for a property */
  createPropertyBoost?: Maybe<ListingBoost>;
  /** Create a pre-signed upload target for property media stored in S3-compatible storage */
  createPropertyMediaUploadTarget?: Maybe<PropertyMediaUploadTarget>;
  /** Report a property */
  createReport?: Maybe<Report>;
  /** Create or update a property review */
  createReview?: Maybe<Review>;
  /** Create a saved search for the current user */
  createSavedSearch?: Maybe<SavedSearch>;
  createServiceListing?: Maybe<ServiceListing>;
  createServiceProvider?: Maybe<ServiceProvider>;
  createStaticPage?: Maybe<StaticPage>;
  /** Create a subscription plan */
  createSubscriptionPlan?: Maybe<SubscriptionPlan>;
  /** Delete an admin profile — admin only */
  deleteAdmin?: Maybe<Admin>;
  /** Delete an amenity */
  deleteAmenity?: Maybe<Amenity>;
  deleteArticle?: Maybe<Article>;
  deleteAttorneyProfile?: Maybe<AttorneyProfile>;
  deleteMarketplaceItem?: Maybe<MarketplaceItem>;
  /** Delete a notification */
  deleteNotification?: Maybe<Scalars["Boolean"]["output"]>;
  /** Delete a property */
  deleteProperty?: Maybe<Property>;
  /** Delete a listing boost */
  deletePropertyBoost?: Maybe<Scalars["Boolean"]["output"]>;
  /** Delete a property media item */
  deletePropertyMedia?: Maybe<Property>;
  /** Delete a renter profile — admin only */
  deleteRenter?: Maybe<Renter>;
  /** Delete a review */
  deleteReview?: Maybe<Review>;
  deleteRoommateProfile?: Maybe<RoommateProfile>;
  /** Delete a saved search */
  deleteSavedSearch?: Maybe<Scalars["Boolean"]["output"]>;
  deleteServiceListing?: Maybe<ServiceListing>;
  /** Delete a subscription plan */
  deleteSubscriptionPlan?: Maybe<SubscriptionPlan>;
  /** Delete a user by ID — admin only */
  deleteUser?: Maybe<User>;
  /** Duplicate a property listing into a draft */
  duplicateProperty?: Maybe<Property>;
  /** Mark all notifications as read */
  markAllNotificationsRead?: Maybe<Scalars["Boolean"]["output"]>;
  markConversationRead?: Maybe<ConversationParticipant>;
  /** Mark a notification as read */
  markNotificationRead?: Maybe<Notification>;
  publishArticle?: Maybe<Article>;
  publishMarketplaceItem?: Maybe<MarketplaceItem>;
  /** Publish a property after validation */
  publishProperty?: Maybe<Property>;
  publishStaticPage?: Maybe<StaticPage>;
  rejectAgentApplication?: Maybe<AgentApplication>;
  /** Reject and archive a property listing */
  rejectPropertyForAdmin?: Maybe<Property>;
  /** Remove a user from an agency's agent roster */
  removeAgencyAgent?: Maybe<Agency>;
  /** Reorder existing property media */
  reorderPropertyMedia?: Maybe<Array<PropertyMedia>>;
  requestAgencyAdvertising?: Maybe<AgencyAdvertisingRequest>;
  requestService?: Maybe<ServiceRequest>;
  /** Resolve a report */
  resolveReport?: Maybe<Report>;
  saveMarketplaceItem?: Maybe<MarketplaceSavedItem>;
  /** Save a property for the current user */
  saveProperty?: Maybe<SavedProperty>;
  /** Create or update the buy detail for a property */
  savePropertyBuyDetail?: Maybe<BuyDetail>;
  /** Create or replace the buy payment plan for a property */
  savePropertyBuyPaymentPlan?: Maybe<PaymentPlan>;
  /** Create or update the rent detail for a property */
  savePropertyRentDetail?: Maybe<RentDetail>;
  /** Create or update the sell detail for a property */
  savePropertySellDetail?: Maybe<SellDetail>;
  saveRoommateProfile?: Maybe<RoommateSavedProfile>;
  /** Schedule a viewing for an inquiry */
  scheduleViewing?: Maybe<Viewing>;
  sendMessage?: Maybe<ConversationMessage>;
  /** Mark one media item as the primary property media */
  setPrimaryPropertyMedia?: Maybe<PropertyMedia>;
  submitContactMessage?: Maybe<ContactMessage>;
  submitJobApplication?: Maybe<JobApplication>;
  /** Subscribe an agent or owner to a plan */
  subscribeToPlan?: Maybe<AgentSubscription>;
  /** Toggle alerts for a saved search */
  toggleSavedSearchAlert?: Maybe<SavedSearch>;
  /** Increment a property view counter */
  trackPropertyView?: Maybe<Property>;
  unsaveMarketplaceItem?: Maybe<Scalars["Boolean"]["output"]>;
  /** Remove a property from the current user's saved list */
  unsaveProperty?: Maybe<Scalars["Boolean"]["output"]>;
  unsaveRoommateProfile?: Maybe<Scalars["Boolean"]["output"]>;
  /** Update an admin profile — admin only */
  updateAdmin?: Maybe<Admin>;
  /** Update an agency */
  updateAgency?: Maybe<Agency>;
  updateAgencyAdvertisingRequestStatus?: Maybe<AgencyAdvertisingRequest>;
  /** Update an amenity */
  updateAmenity?: Maybe<Amenity>;
  updateArticle?: Maybe<Article>;
  updateAttorneyProfile?: Maybe<AttorneyProfile>;
  updateCareerPost?: Maybe<CareerPost>;
  /** Update inquiry status */
  updateInquiryStatus?: Maybe<Inquiry>;
  updateMarketplaceItem?: Maybe<MarketplaceItem>;
  /** Update an existing property */
  updateProperty?: Maybe<Property>;
  /** Update a renter profile — admin or self */
  updateRenter?: Maybe<Renter>;
  updateServiceListing?: Maybe<ServiceListing>;
  updateServiceProvider?: Maybe<ServiceProvider>;
  updateServiceRequestStatus?: Maybe<ServiceRequest>;
  updateStaticPage?: Maybe<StaticPage>;
  /** Update a subscription plan */
  updateSubscriptionPlan?: Maybe<SubscriptionPlan>;
  /** Update a user — admin or self only */
  updateUser?: Maybe<User>;
  /** Create or update a property's buy detail */
  upsertBuyDetail?: Maybe<BuyDetail>;
  /** Create or replace a property's buy payment plan */
  upsertPropertyPaymentPlan?: Maybe<PaymentPlan>;
  /** Create or update a property's rent detail */
  upsertRentDetail?: Maybe<RentDetail>;
  upsertRoommateProfile?: Maybe<RoommateProfile>;
  /** Create or update a property's sell detail */
  upsertSellDetail?: Maybe<SellDetail>;
};

export type MutationAddAgencyAgentArgs = {
  agencyId: Scalars["ID"]["input"];
  agentId: Scalars["ID"]["input"];
};

export type MutationAddPropertyMediaArgs = {
  input: AddPropertyMediaInput;
  propertyId: Scalars["ID"]["input"];
};

export type MutationApplyAsAgentArgs = {
  input: AgentApplicationInput;
};

export type MutationApproveAgentApplicationArgs = {
  applicationId: Scalars["ID"]["input"];
};

export type MutationApprovePropertyForAdminArgs = {
  propertyId: Scalars["ID"]["input"];
};

export type MutationArchiveArticleArgs = {
  articleId: Scalars["ID"]["input"];
};

export type MutationArchiveCareerPostArgs = {
  careerPostId: Scalars["ID"]["input"];
};

export type MutationArchiveConversationArgs = {
  conversationId: Scalars["ID"]["input"];
};

export type MutationArchiveMarketplaceItemArgs = {
  itemId: Scalars["ID"]["input"];
};

export type MutationArchivePropertyArgs = {
  propertyId: Scalars["ID"]["input"];
};

export type MutationArchiveStaticPageArgs = {
  pageId: Scalars["ID"]["input"];
};

export type MutationCalculateAffordabilityArgs = {
  input: AffordabilityCalculatorInput;
};

export type MutationCalculateBondArgs = {
  input: BondCalculatorInput;
};

export type MutationCancelViewingArgs = {
  viewingId: Scalars["ID"]["input"];
};

export type MutationCompleteViewingArgs = {
  viewingId: Scalars["ID"]["input"];
};

export type MutationConfirmViewingArgs = {
  viewingId: Scalars["ID"]["input"];
};

export type MutationCreateAgencyArgs = {
  input: AgencyInput;
};

export type MutationCreateAmenityArgs = {
  input: AmenityInput;
};

export type MutationCreateArticleArgs = {
  input: ArticleInput;
};

export type MutationCreateAttorneyProfileArgs = {
  input: AttorneyProfileInput;
};

export type MutationCreateCareerPostArgs = {
  input: CareerPostInput;
};

export type MutationCreateConversationArgs = {
  input: CreateConversationInput;
};

export type MutationCreateInquiryArgs = {
  input: InquiryInput;
  propertyId: Scalars["ID"]["input"];
};

export type MutationCreateMarketplaceItemArgs = {
  input: MarketplaceItemInput;
};

export type MutationCreatePropertyArgs = {
  input: PropertyInput;
};

export type MutationCreatePropertyBoostArgs = {
  input: ListingBoostInput;
  propertyId: Scalars["ID"]["input"];
};

export type MutationCreatePropertyMediaUploadTargetArgs = {
  input: CreatePropertyMediaUploadTargetInput;
  propertyId: Scalars["ID"]["input"];
};

export type MutationCreateReportArgs = {
  input: ReportInput;
  propertyId: Scalars["ID"]["input"];
};

export type MutationCreateReviewArgs = {
  input: ReviewInput;
  propertyId: Scalars["ID"]["input"];
};

export type MutationCreateSavedSearchArgs = {
  input: SavedSearchInput;
};

export type MutationCreateServiceListingArgs = {
  input: ServiceListingInput;
};

export type MutationCreateServiceProviderArgs = {
  input: ServiceProviderInput;
};

export type MutationCreateStaticPageArgs = {
  input: StaticPageInput;
};

export type MutationCreateSubscriptionPlanArgs = {
  input: SubscriptionPlanInput;
};

export type MutationDeleteAdminArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteAmenityArgs = {
  amenityId: Scalars["ID"]["input"];
};

export type MutationDeleteArticleArgs = {
  articleId: Scalars["ID"]["input"];
};

export type MutationDeleteAttorneyProfileArgs = {
  attorneyId: Scalars["ID"]["input"];
};

export type MutationDeleteMarketplaceItemArgs = {
  itemId: Scalars["ID"]["input"];
};

export type MutationDeleteNotificationArgs = {
  notificationId: Scalars["ID"]["input"];
};

export type MutationDeletePropertyArgs = {
  propertyId: Scalars["ID"]["input"];
};

export type MutationDeletePropertyBoostArgs = {
  boostId: Scalars["ID"]["input"];
};

export type MutationDeletePropertyMediaArgs = {
  mediaId: Scalars["ID"]["input"];
  propertyId: Scalars["ID"]["input"];
};

export type MutationDeleteRenterArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteReviewArgs = {
  reviewId: Scalars["ID"]["input"];
};

export type MutationDeleteRoommateProfileArgs = {
  profileId: Scalars["ID"]["input"];
};

export type MutationDeleteSavedSearchArgs = {
  savedSearchId: Scalars["ID"]["input"];
};

export type MutationDeleteServiceListingArgs = {
  listingId: Scalars["ID"]["input"];
};

export type MutationDeleteSubscriptionPlanArgs = {
  planId: Scalars["ID"]["input"];
};

export type MutationDeleteUserArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDuplicatePropertyArgs = {
  propertyId: Scalars["ID"]["input"];
};

export type MutationMarkConversationReadArgs = {
  conversationId: Scalars["ID"]["input"];
};

export type MutationMarkNotificationReadArgs = {
  notificationId: Scalars["ID"]["input"];
};

export type MutationPublishArticleArgs = {
  articleId: Scalars["ID"]["input"];
};

export type MutationPublishMarketplaceItemArgs = {
  itemId: Scalars["ID"]["input"];
};

export type MutationPublishPropertyArgs = {
  propertyId: Scalars["ID"]["input"];
};

export type MutationPublishStaticPageArgs = {
  pageId: Scalars["ID"]["input"];
};

export type MutationRejectAgentApplicationArgs = {
  applicationId: Scalars["ID"]["input"];
  rejectionReason?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationRejectPropertyForAdminArgs = {
  propertyId: Scalars["ID"]["input"];
};

export type MutationRemoveAgencyAgentArgs = {
  agencyId: Scalars["ID"]["input"];
  agentId: Scalars["ID"]["input"];
};

export type MutationReorderPropertyMediaArgs = {
  input: PropertyMediaReorderInput;
  propertyId: Scalars["ID"]["input"];
};

export type MutationRequestAgencyAdvertisingArgs = {
  input: AgencyAdvertisingRequestInput;
};

export type MutationRequestServiceArgs = {
  input: ServiceRequestInput;
  listingId: Scalars["ID"]["input"];
};

export type MutationResolveReportArgs = {
  reportId: Scalars["ID"]["input"];
};

export type MutationSaveMarketplaceItemArgs = {
  itemId: Scalars["ID"]["input"];
};

export type MutationSavePropertyArgs = {
  propertyId: Scalars["ID"]["input"];
};

export type MutationSavePropertyBuyDetailArgs = {
  input: BuyDetailInput;
  propertyId: Scalars["ID"]["input"];
};

export type MutationSavePropertyBuyPaymentPlanArgs = {
  input: PaymentPlanInput;
  propertyId: Scalars["ID"]["input"];
};

export type MutationSavePropertyRentDetailArgs = {
  input: RentDetailInput;
  propertyId: Scalars["ID"]["input"];
};

export type MutationSavePropertySellDetailArgs = {
  input: SellDetailInput;
  propertyId: Scalars["ID"]["input"];
};

export type MutationSaveRoommateProfileArgs = {
  profileId: Scalars["ID"]["input"];
};

export type MutationScheduleViewingArgs = {
  input: ScheduleViewingInput;
  inquiryId: Scalars["ID"]["input"];
};

export type MutationSendMessageArgs = {
  conversationId: Scalars["ID"]["input"];
  input: SendMessageInput;
};

export type MutationSetPrimaryPropertyMediaArgs = {
  mediaId: Scalars["ID"]["input"];
  propertyId: Scalars["ID"]["input"];
};

export type MutationSubmitContactMessageArgs = {
  input: ContactMessageInput;
};

export type MutationSubmitJobApplicationArgs = {
  careerPostId: Scalars["ID"]["input"];
  input: JobApplicationInput;
};

export type MutationSubscribeToPlanArgs = {
  input: SubscribeToPlanInput;
};

export type MutationToggleSavedSearchAlertArgs = {
  savedSearchId: Scalars["ID"]["input"];
};

export type MutationTrackPropertyViewArgs = {
  propertyId: Scalars["ID"]["input"];
};

export type MutationUnsaveMarketplaceItemArgs = {
  itemId: Scalars["ID"]["input"];
};

export type MutationUnsavePropertyArgs = {
  propertyId: Scalars["ID"]["input"];
};

export type MutationUnsaveRoommateProfileArgs = {
  profileId: Scalars["ID"]["input"];
};

export type MutationUpdateAdminArgs = {
  id: Scalars["ID"]["input"];
  input: AdminUpdateInput;
};

export type MutationUpdateAgencyArgs = {
  agencyId: Scalars["ID"]["input"];
  input: AgencyUpdateInput;
};

export type MutationUpdateAgencyAdvertisingRequestStatusArgs = {
  input: AgencyAdvertisingRequestStatusInput;
  requestId: Scalars["ID"]["input"];
};

export type MutationUpdateAmenityArgs = {
  amenityId: Scalars["ID"]["input"];
  input: AmenityUpdateInput;
};

export type MutationUpdateArticleArgs = {
  articleId: Scalars["ID"]["input"];
  input: ArticleUpdateInput;
};

export type MutationUpdateAttorneyProfileArgs = {
  attorneyId: Scalars["ID"]["input"];
  input: AttorneyProfileUpdateInput;
};

export type MutationUpdateCareerPostArgs = {
  careerPostId: Scalars["ID"]["input"];
  input: CareerPostUpdateInput;
};

export type MutationUpdateInquiryStatusArgs = {
  input: InquiryStatusUpdateInput;
  inquiryId: Scalars["ID"]["input"];
};

export type MutationUpdateMarketplaceItemArgs = {
  input: MarketplaceItemUpdateInput;
  itemId: Scalars["ID"]["input"];
};

export type MutationUpdatePropertyArgs = {
  input: PropertyUpdateInput;
  propertyId: Scalars["ID"]["input"];
};

export type MutationUpdateRenterArgs = {
  id: Scalars["ID"]["input"];
  input: RenterUpdateInput;
};

export type MutationUpdateServiceListingArgs = {
  input: ServiceListingUpdateInput;
  listingId: Scalars["ID"]["input"];
};

export type MutationUpdateServiceProviderArgs = {
  input: ServiceProviderUpdateInput;
  providerId: Scalars["ID"]["input"];
};

export type MutationUpdateServiceRequestStatusArgs = {
  input: ServiceRequestStatusInput;
  requestId: Scalars["ID"]["input"];
};

export type MutationUpdateStaticPageArgs = {
  input: StaticPageUpdateInput;
  pageId: Scalars["ID"]["input"];
};

export type MutationUpdateSubscriptionPlanArgs = {
  input: SubscriptionPlanUpdateInput;
  planId: Scalars["ID"]["input"];
};

export type MutationUpdateUserArgs = {
  id: Scalars["ID"]["input"];
  input: UserUpdateInput;
};

export type MutationUpsertBuyDetailArgs = {
  input: BuyDetailInput;
  propertyId: Scalars["ID"]["input"];
};

export type MutationUpsertPropertyPaymentPlanArgs = {
  input: PaymentPlanInput;
  propertyId: Scalars["ID"]["input"];
};

export type MutationUpsertRentDetailArgs = {
  input: RentDetailInput;
  propertyId: Scalars["ID"]["input"];
};

export type MutationUpsertRoommateProfileArgs = {
  input: RoommateProfileInput;
};

export type MutationUpsertSellDetailArgs = {
  input: SellDetailInput;
  propertyId: Scalars["ID"]["input"];
};

export type Notification = {
  __typename?: "Notification";
  body?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  isRead?: Maybe<Scalars["Boolean"]["output"]>;
  metadataJson?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
  userId?: Maybe<Scalars["ID"]["output"]>;
};

export type NotificationFilterInput = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  unreadOnly?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PaymentPlan = {
  __typename?: "PaymentPlan";
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  installments?: Maybe<Array<Installment>>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
};

export type PaymentPlanInput = {
  installments: Array<PaymentPlanInstallmentInput>;
};

export type PaymentPlanInstallmentInput = {
  amount: Scalars["Float"]["input"];
  dueDate: Scalars["Date"]["input"];
  label?: InputMaybe<Scalars["String"]["input"]>;
  percentage?: InputMaybe<Scalars["Float"]["input"]>;
};

export type PriceHistory = {
  __typename?: "PriceHistory";
  changedAt?: Maybe<Scalars["Date"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
  propertyId?: Maybe<Scalars["ID"]["output"]>;
};

export type Property = {
  __typename?: "Property";
  amenities?: Maybe<Array<PropertyAmenity>>;
  availableFrom?: Maybe<Scalars["Date"]["output"]>;
  bathrooms?: Maybe<Scalars["Int"]["output"]>;
  bedrooms?: Maybe<Scalars["Int"]["output"]>;
  builtUpArea?: Maybe<Scalars["Float"]["output"]>;
  buyDetail?: Maybe<BuyDetail>;
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  currency?: Maybe<Scalars["String"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  documents?: Maybe<Array<PropertyDocument>>;
  expiresAt?: Maybe<Scalars["Date"]["output"]>;
  floorNumber?: Maybe<Scalars["Int"]["output"]>;
  furnishing?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  isFeatured?: Maybe<Scalars["Boolean"]["output"]>;
  isVerified?: Maybe<Scalars["Boolean"]["output"]>;
  listingType?: Maybe<Scalars["String"]["output"]>;
  location?: Maybe<Location>;
  media?: Maybe<Array<PropertyMedia>>;
  occupancyStatus?: Maybe<Scalars["String"]["output"]>;
  parkingSpaces?: Maybe<Scalars["Int"]["output"]>;
  permitNumber?: Maybe<Scalars["String"]["output"]>;
  plotArea?: Maybe<Scalars["Float"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
  priceFrequency?: Maybe<Scalars["String"]["output"]>;
  priceHistory?: Maybe<Array<PriceHistory>>;
  propertyType?: Maybe<Scalars["String"]["output"]>;
  rentDetail?: Maybe<RentDetail>;
  sellDetail?: Maybe<SellDetail>;
  slug?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  totalFloors?: Maybe<Scalars["Int"]["output"]>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
  views?: Maybe<Scalars["Int"]["output"]>;
  yearBuilt?: Maybe<Scalars["Int"]["output"]>;
};

export type PropertyAmenity = {
  __typename?: "PropertyAmenity";
  amenity?: Maybe<Amenity>;
  amenityId?: Maybe<Scalars["ID"]["output"]>;
  propertyId?: Maybe<Scalars["ID"]["output"]>;
};

export type PropertyAnalytics = {
  __typename?: "PropertyAnalytics";
  inquiries?: Maybe<Scalars["Int"]["output"]>;
  reviews?: Maybe<Scalars["Int"]["output"]>;
  viewings?: Maybe<Scalars["Int"]["output"]>;
  views?: Maybe<Scalars["Int"]["output"]>;
};

export type PropertyDocument = {
  __typename?: "PropertyDocument";
  id?: Maybe<Scalars["ID"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
};

export type PropertyDocumentInput = {
  label?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  url: Scalars["String"]["input"];
};

export type PropertyFilterInput = {
  agencyId?: InputMaybe<Scalars["ID"]["input"]>;
  agentId?: InputMaybe<Scalars["ID"]["input"]>;
  bathrooms?: InputMaybe<Scalars["Int"]["input"]>;
  bedrooms?: InputMaybe<Scalars["Int"]["input"]>;
  city?: InputMaybe<Scalars["String"]["input"]>;
  isFeatured?: InputMaybe<Scalars["Boolean"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  listingType?: InputMaybe<Scalars["String"]["input"]>;
  maxArea?: InputMaybe<Scalars["Float"]["input"]>;
  maxPrice?: InputMaybe<Scalars["Float"]["input"]>;
  minArea?: InputMaybe<Scalars["Float"]["input"]>;
  minPrice?: InputMaybe<Scalars["Float"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  propertyType?: InputMaybe<Scalars["String"]["input"]>;
  q?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type PropertyInput = {
  agencyId?: InputMaybe<Scalars["ID"]["input"]>;
  agentId?: InputMaybe<Scalars["ID"]["input"]>;
  amenityIds?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  availableFrom?: InputMaybe<Scalars["Date"]["input"]>;
  bathrooms?: InputMaybe<Scalars["Int"]["input"]>;
  bedrooms?: InputMaybe<Scalars["Int"]["input"]>;
  builtUpArea?: InputMaybe<Scalars["Float"]["input"]>;
  currency?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  documents?: InputMaybe<Array<PropertyDocumentInput>>;
  expiresAt?: InputMaybe<Scalars["Date"]["input"]>;
  floorNumber?: InputMaybe<Scalars["Int"]["input"]>;
  furnishing?: InputMaybe<Scalars["String"]["input"]>;
  listingType: Scalars["String"]["input"];
  location?: InputMaybe<PropertyLocationInput>;
  media?: InputMaybe<Array<PropertyMediaInput>>;
  occupancyStatus?: InputMaybe<Scalars["String"]["input"]>;
  parkingSpaces?: InputMaybe<Scalars["Int"]["input"]>;
  permitNumber?: InputMaybe<Scalars["String"]["input"]>;
  plotArea?: InputMaybe<Scalars["Float"]["input"]>;
  price?: InputMaybe<Scalars["Float"]["input"]>;
  priceFrequency?: InputMaybe<Scalars["String"]["input"]>;
  propertyType: Scalars["String"]["input"];
  title: Scalars["String"]["input"];
  totalFloors?: InputMaybe<Scalars["Int"]["input"]>;
  yearBuilt?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PropertyLocationInput = {
  address: Scalars["String"]["input"];
  city: Scalars["String"]["input"];
  country: Scalars["String"]["input"];
  geoJson?: InputMaybe<Scalars["String"]["input"]>;
  latitude?: InputMaybe<Scalars["Float"]["input"]>;
  longitude?: InputMaybe<Scalars["Float"]["input"]>;
  neighborhood?: InputMaybe<Scalars["String"]["input"]>;
  postalCode?: InputMaybe<Scalars["String"]["input"]>;
  state?: InputMaybe<Scalars["String"]["input"]>;
};

export type PropertyMedia = {
  __typename?: "PropertyMedia";
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  isPrimary?: Maybe<Scalars["Boolean"]["output"]>;
  order?: Maybe<Scalars["Int"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
};

export type PropertyMediaInput = {
  isPrimary?: InputMaybe<Scalars["Boolean"]["input"]>;
  order?: InputMaybe<Scalars["Int"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  url: Scalars["String"]["input"];
};

export type PropertyMediaReorderInput = {
  items: Array<PropertyMediaReorderItemInput>;
};

export type PropertyMediaReorderItemInput = {
  mediaId: Scalars["ID"]["input"];
  order: Scalars["Int"]["input"];
};

export type PropertyMediaUploadTarget = {
  __typename?: "PropertyMediaUploadTarget";
  contentType?: Maybe<Scalars["String"]["output"]>;
  expiresInSeconds?: Maybe<Scalars["Int"]["output"]>;
  key?: Maybe<Scalars["String"]["output"]>;
  publicUrl?: Maybe<Scalars["String"]["output"]>;
  uploadUrl?: Maybe<Scalars["String"]["output"]>;
};

export type PropertySearchInput = {
  agencyId?: InputMaybe<Scalars["ID"]["input"]>;
  agentId?: InputMaybe<Scalars["ID"]["input"]>;
  bathrooms?: InputMaybe<Scalars["Int"]["input"]>;
  bedrooms?: InputMaybe<Scalars["Int"]["input"]>;
  city?: InputMaybe<Scalars["String"]["input"]>;
  isFeatured?: InputMaybe<Scalars["Boolean"]["input"]>;
  latitude?: InputMaybe<Scalars["Float"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  listingType?: InputMaybe<Scalars["String"]["input"]>;
  longitude?: InputMaybe<Scalars["Float"]["input"]>;
  maxArea?: InputMaybe<Scalars["Float"]["input"]>;
  maxPrice?: InputMaybe<Scalars["Float"]["input"]>;
  minArea?: InputMaybe<Scalars["Float"]["input"]>;
  minPrice?: InputMaybe<Scalars["Float"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  propertyType?: InputMaybe<Scalars["String"]["input"]>;
  q?: InputMaybe<Scalars["String"]["input"]>;
  radiusKm?: InputMaybe<Scalars["Float"]["input"]>;
  sort?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type PropertyUpdateInput = {
  agencyId?: InputMaybe<Scalars["ID"]["input"]>;
  agentId?: InputMaybe<Scalars["ID"]["input"]>;
  amenityIds?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  availableFrom?: InputMaybe<Scalars["Date"]["input"]>;
  bathrooms?: InputMaybe<Scalars["Int"]["input"]>;
  bedrooms?: InputMaybe<Scalars["Int"]["input"]>;
  builtUpArea?: InputMaybe<Scalars["Float"]["input"]>;
  currency?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  documents?: InputMaybe<Array<PropertyDocumentInput>>;
  expiresAt?: InputMaybe<Scalars["Date"]["input"]>;
  floorNumber?: InputMaybe<Scalars["Int"]["input"]>;
  furnishing?: InputMaybe<Scalars["String"]["input"]>;
  location?: InputMaybe<PropertyLocationInput>;
  media?: InputMaybe<Array<PropertyMediaInput>>;
  occupancyStatus?: InputMaybe<Scalars["String"]["input"]>;
  parkingSpaces?: InputMaybe<Scalars["Int"]["input"]>;
  permitNumber?: InputMaybe<Scalars["String"]["input"]>;
  plotArea?: InputMaybe<Scalars["Float"]["input"]>;
  price?: InputMaybe<Scalars["Float"]["input"]>;
  priceFrequency?: InputMaybe<Scalars["String"]["input"]>;
  propertyType?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  totalFloors?: InputMaybe<Scalars["Int"]["input"]>;
  yearBuilt?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Query = {
  __typename?: "Query";
  /** Get an admin profile by ID — admin only */
  admin?: Maybe<Admin>;
  /** Return aggregate admin dashboard metrics */
  adminAnalyticsOverview?: Maybe<AdminAnalyticsOverview>;
  /** List properties pending admin approval */
  adminPendingProperties?: Maybe<Array<Property>>;
  /** Get all admin profiles — admin only */
  admins?: Maybe<Array<Admin>>;
  /** Fetch a single agency by ID */
  agency?: Maybe<Agency>;
  agencyAdvertisingRequests?: Maybe<Array<AgencyAdvertisingRequest>>;
  /** List amenities, optionally filtered by category */
  amenities?: Maybe<Array<Amenity>>;
  /** Fetch an article by ID */
  article?: Maybe<Article>;
  /** Fetch an article by slug */
  articleBySlug?: Maybe<Article>;
  /** List article categories */
  articleCategories?: Maybe<Array<ArticleCategory>>;
  /** List published articles or all articles for admins */
  articles?: Maybe<Array<Article>>;
  attorney?: Maybe<AttorneyProfile>;
  attorneys?: Maybe<Array<AttorneyProfile>>;
  careerPost?: Maybe<CareerPost>;
  careerPosts?: Maybe<Array<CareerPost>>;
  contactMessages?: Maybe<Array<ContactMessage>>;
  conversation?: Maybe<Conversation>;
  conversations?: Maybe<Array<Conversation>>;
  /** List inquiries visible to the current user */
  inquiries?: Maybe<Array<Inquiry>>;
  /** Fetch a single inquiry by ID */
  inquiry?: Maybe<Inquiry>;
  marketplaceItem?: Maybe<MarketplaceItem>;
  marketplaceItems?: Maybe<Array<MarketplaceItem>>;
  /** Get the currently authenticated user */
  me?: Maybe<User>;
  messages?: Maybe<Array<ConversationMessage>>;
  myMarketplaceItems?: Maybe<Array<MarketplaceItem>>;
  /** Get the current renter profile */
  myProfile?: Maybe<Renter>;
  myRoommateProfile?: Maybe<RoommateProfile>;
  myServiceRequests?: Maybe<Array<ServiceRequest>>;
  /** List subscriptions for the current agent or owner */
  mySubscriptions?: Maybe<Array<AgentSubscription>>;
  /** List notifications for the current user */
  notifications?: Maybe<Array<Notification>>;
  professionalApplications?: Maybe<Array<AgentApplication>>;
  /** List properties with filtering */
  properties?: Maybe<Array<Property>>;
  /** Fetch a property by slug */
  property?: Maybe<Property>;
  /** Return aggregate property analytics */
  propertyAnalytics?: Maybe<PropertyAnalytics>;
  /** List boosts for a property */
  propertyBoosts?: Maybe<Array<ListingBoost>>;
  /** Fetch the buy detail for a property */
  propertyBuyDetail?: Maybe<BuyDetail>;
  /** List media for a property */
  propertyMedia?: Maybe<Array<PropertyMedia>>;
  /** List property price history entries */
  propertyPriceHistory?: Maybe<Array<PriceHistory>>;
  /** Fetch the rent detail for a property */
  propertyRentDetail?: Maybe<RentDetail>;
  /** List reviews for a property */
  propertyReviews?: Maybe<Array<Review>>;
  /** Search properties with text, structured, and geo filters */
  propertySearch?: Maybe<Array<Property>>;
  /** Fetch the sell detail for a property */
  propertySellDetail?: Maybe<SellDetail>;
  /** Fetch sell price history for a property */
  propertySellPriceHistory?: Maybe<Array<PriceHistory>>;
  /** Get a renter profile by ID — admin or self */
  renter?: Maybe<Renter>;
  /** Get all renter profiles — admin only */
  renters?: Maybe<Array<Renter>>;
  /** List reports for moderation */
  reports?: Maybe<Array<Report>>;
  roommateProfile?: Maybe<RoommateProfile>;
  roommateProfiles?: Maybe<Array<RoommateProfile>>;
  savedMarketplaceItems?: Maybe<Array<MarketplaceSavedItem>>;
  /** List saved properties for the current user */
  savedProperties?: Maybe<Array<SavedProperty>>;
  savedRoommateProfiles?: Maybe<Array<RoommateSavedProfile>>;
  /** List saved searches for the current user */
  savedSearches?: Maybe<Array<SavedSearch>>;
  serviceListing?: Maybe<ServiceListing>;
  serviceListings?: Maybe<Array<ServiceListing>>;
  serviceProvider?: Maybe<ServiceProvider>;
  serviceProviders?: Maybe<Array<ServiceProvider>>;
  /** Find similar published properties */
  similarProperties?: Maybe<Array<Property>>;
  staticPage?: Maybe<StaticPage>;
  staticPageBySlug?: Maybe<StaticPage>;
  staticPages?: Maybe<Array<StaticPage>>;
  /** List available subscription plans */
  subscriptionPlans?: Maybe<Array<SubscriptionPlan>>;
  /** Get a user by ID — admin only */
  user?: Maybe<User>;
  /** Get all users — admin only */
  users?: Maybe<Array<User>>;
  /** Fetch a single viewing by ID */
  viewing?: Maybe<Viewing>;
  /** List viewings visible to the current user */
  viewings?: Maybe<Array<Viewing>>;
};

export type QueryAdminArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryAgencyArgs = {
  agencyId: Scalars["ID"]["input"];
};

export type QueryAgencyAdvertisingRequestsArgs = {
  filter?: InputMaybe<AgencyAdvertisingRequestFilterInput>;
};

export type QueryAmenitiesArgs = {
  filter?: InputMaybe<AmenityFilterInput>;
};

export type QueryArticleArgs = {
  articleId: Scalars["ID"]["input"];
};

export type QueryArticleBySlugArgs = {
  slug: Scalars["String"]["input"];
};

export type QueryArticlesArgs = {
  filter?: InputMaybe<ArticleFilterInput>;
};

export type QueryAttorneyArgs = {
  attorneyId: Scalars["ID"]["input"];
};

export type QueryAttorneysArgs = {
  filter?: InputMaybe<AttorneyFilterInput>;
};

export type QueryCareerPostArgs = {
  careerPostId: Scalars["ID"]["input"];
};

export type QueryCareerPostsArgs = {
  filter?: InputMaybe<CareerPostFilterInput>;
};

export type QueryContactMessagesArgs = {
  filter?: InputMaybe<ContactMessageFilterInput>;
};

export type QueryConversationArgs = {
  conversationId: Scalars["ID"]["input"];
};

export type QueryConversationsArgs = {
  filter?: InputMaybe<ConversationFilterInput>;
};

export type QueryInquiriesArgs = {
  filter?: InputMaybe<InquiryFilterInput>;
};

export type QueryInquiryArgs = {
  inquiryId: Scalars["ID"]["input"];
};

export type QueryMarketplaceItemArgs = {
  itemId: Scalars["ID"]["input"];
};

export type QueryMarketplaceItemsArgs = {
  filter?: InputMaybe<MarketplaceItemFilterInput>;
};

export type QueryMessagesArgs = {
  conversationId: Scalars["ID"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryNotificationsArgs = {
  filter?: InputMaybe<NotificationFilterInput>;
};

export type QueryProfessionalApplicationsArgs = {
  filter?: InputMaybe<AgentApplicationFilterInput>;
};

export type QueryPropertiesArgs = {
  filter?: InputMaybe<PropertyFilterInput>;
};

export type QueryPropertyArgs = {
  slug: Scalars["String"]["input"];
};

export type QueryPropertyAnalyticsArgs = {
  propertyId: Scalars["ID"]["input"];
};

export type QueryPropertyBoostsArgs = {
  propertyId: Scalars["ID"]["input"];
};

export type QueryPropertyBuyDetailArgs = {
  propertyId: Scalars["ID"]["input"];
};

export type QueryPropertyMediaArgs = {
  propertyId: Scalars["ID"]["input"];
};

export type QueryPropertyPriceHistoryArgs = {
  propertyId: Scalars["ID"]["input"];
};

export type QueryPropertyRentDetailArgs = {
  propertyId: Scalars["ID"]["input"];
};

export type QueryPropertyReviewsArgs = {
  propertyId: Scalars["ID"]["input"];
};

export type QueryPropertySearchArgs = {
  filter?: InputMaybe<PropertySearchInput>;
};

export type QueryPropertySellDetailArgs = {
  propertyId: Scalars["ID"]["input"];
};

export type QueryPropertySellPriceHistoryArgs = {
  propertyId: Scalars["ID"]["input"];
};

export type QueryRenterArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryRentersArgs = {
  search?: InputMaybe<RenterSearchInput>;
};

export type QueryReportsArgs = {
  filter?: InputMaybe<ReportFilterInput>;
};

export type QueryRoommateProfileArgs = {
  profileId: Scalars["ID"]["input"];
};

export type QueryRoommateProfilesArgs = {
  filter?: InputMaybe<RoommateProfileFilterInput>;
};

export type QueryServiceListingArgs = {
  listingId: Scalars["ID"]["input"];
};

export type QueryServiceListingsArgs = {
  filter?: InputMaybe<ServiceListingFilterInput>;
};

export type QueryServiceProviderArgs = {
  providerId: Scalars["ID"]["input"];
};

export type QueryServiceProvidersArgs = {
  filter?: InputMaybe<ServiceProviderFilterInput>;
};

export type QuerySimilarPropertiesArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  propertyId: Scalars["ID"]["input"];
};

export type QueryStaticPageArgs = {
  pageId: Scalars["ID"]["input"];
};

export type QueryStaticPageBySlugArgs = {
  slug: Scalars["String"]["input"];
};

export type QueryStaticPagesArgs = {
  filter?: InputMaybe<StaticPageFilterInput>;
};

export type QueryUserArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryUsersArgs = {
  search?: InputMaybe<UserSearchInput>;
};

export type QueryViewingArgs = {
  viewingId: Scalars["ID"]["input"];
};

export type QueryViewingsArgs = {
  filter?: InputMaybe<ViewingFilterInput>;
};

export type RentDetail = {
  __typename?: "RentDetail";
  cheques?: Maybe<Scalars["Int"]["output"]>;
  chillerIncluded?: Maybe<Scalars["Boolean"]["output"]>;
  depositAmount?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  maintenanceBy?: Maybe<Scalars["String"]["output"]>;
  minLeaseTerm?: Maybe<Scalars["Int"]["output"]>;
  petsAllowed?: Maybe<Scalars["Boolean"]["output"]>;
  propertyId?: Maybe<Scalars["ID"]["output"]>;
  tenantPreference?: Maybe<Scalars["String"]["output"]>;
  utilitiesIncluded?: Maybe<Scalars["Boolean"]["output"]>;
};

export type RentDetailInput = {
  cheques?: InputMaybe<Scalars["Int"]["input"]>;
  chillerIncluded?: InputMaybe<Scalars["Boolean"]["input"]>;
  depositAmount?: InputMaybe<Scalars["Float"]["input"]>;
  maintenanceBy?: InputMaybe<Scalars["String"]["input"]>;
  minLeaseTerm?: InputMaybe<Scalars["Int"]["input"]>;
  petsAllowed?: InputMaybe<Scalars["Boolean"]["input"]>;
  tenantPreference?: InputMaybe<Scalars["String"]["input"]>;
  utilitiesIncluded?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Renter = {
  __typename?: "Renter";
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars["String"]["output"]>;
};

export type RenterSearchInput = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type RenterUpdateInput = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type Report = {
  __typename?: "Report";
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  property?: Maybe<Property>;
  propertyId?: Maybe<Scalars["ID"]["output"]>;
  reason?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
  userId?: Maybe<Scalars["ID"]["output"]>;
};

export type ReportFilterInput = {
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type ReportInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  reason: Scalars["String"]["input"];
};

export type Review = {
  __typename?: "Review";
  comment?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  property?: Maybe<Property>;
  propertyId?: Maybe<Scalars["ID"]["output"]>;
  rating?: Maybe<Scalars["Int"]["output"]>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
  userId?: Maybe<Scalars["ID"]["output"]>;
};

export type ReviewInput = {
  comment?: InputMaybe<Scalars["String"]["input"]>;
  rating: Scalars["Int"]["input"];
};

export type RoommateProfile = {
  __typename?: "RoommateProfile";
  age?: Maybe<Scalars["Int"]["output"]>;
  area?: Maybe<Scalars["String"]["output"]>;
  bio?: Maybe<Scalars["String"]["output"]>;
  budgetMax?: Maybe<Scalars["Float"]["output"]>;
  budgetMin?: Maybe<Scalars["Float"]["output"]>;
  city?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  currency?: Maybe<Scalars["String"]["output"]>;
  gender?: Maybe<Scalars["String"]["output"]>;
  headline?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  moveInDate?: Maybe<Scalars["Date"]["output"]>;
  occupation?: Maybe<Scalars["String"]["output"]>;
  ownerName?: Maybe<Scalars["String"]["output"]>;
  petsFriendly?: Maybe<Scalars["Boolean"]["output"]>;
  photoUrl?: Maybe<Scalars["String"]["output"]>;
  preferredGender?: Maybe<Scalars["String"]["output"]>;
  smokingFriendly?: Maybe<Scalars["Boolean"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
  userId?: Maybe<Scalars["ID"]["output"]>;
};

export type RoommateProfileFilterInput = {
  city?: InputMaybe<Scalars["String"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  maxBudget?: InputMaybe<Scalars["Float"]["input"]>;
  minBudget?: InputMaybe<Scalars["Float"]["input"]>;
  moveInDate?: InputMaybe<Scalars["Date"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  petsFriendly?: InputMaybe<Scalars["Boolean"]["input"]>;
  preferredGender?: InputMaybe<Scalars["String"]["input"]>;
  smokingFriendly?: InputMaybe<Scalars["Boolean"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type RoommateProfileInput = {
  age?: InputMaybe<Scalars["Int"]["input"]>;
  area?: InputMaybe<Scalars["String"]["input"]>;
  bio?: InputMaybe<Scalars["String"]["input"]>;
  budgetMax?: InputMaybe<Scalars["Float"]["input"]>;
  budgetMin?: InputMaybe<Scalars["Float"]["input"]>;
  city: Scalars["String"]["input"];
  currency?: InputMaybe<Scalars["String"]["input"]>;
  gender?: InputMaybe<Scalars["String"]["input"]>;
  headline?: InputMaybe<Scalars["String"]["input"]>;
  moveInDate?: InputMaybe<Scalars["Date"]["input"]>;
  occupation?: InputMaybe<Scalars["String"]["input"]>;
  petsFriendly?: InputMaybe<Scalars["Boolean"]["input"]>;
  photoUrl?: InputMaybe<Scalars["String"]["input"]>;
  preferredGender?: InputMaybe<Scalars["String"]["input"]>;
  smokingFriendly?: InputMaybe<Scalars["Boolean"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type RoommateSavedProfile = {
  __typename?: "RoommateSavedProfile";
  profile?: Maybe<RoommateProfile>;
  profileId?: Maybe<Scalars["ID"]["output"]>;
  savedAt?: Maybe<Scalars["Date"]["output"]>;
  userId?: Maybe<Scalars["ID"]["output"]>;
};

export type SavedProperty = {
  __typename?: "SavedProperty";
  property?: Maybe<Property>;
  propertyId?: Maybe<Scalars["ID"]["output"]>;
  savedAt?: Maybe<Scalars["Date"]["output"]>;
  userId?: Maybe<Scalars["ID"]["output"]>;
};

export type SavedSearch = {
  __typename?: "SavedSearch";
  alertEnabled?: Maybe<Scalars["Boolean"]["output"]>;
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  filtersJson?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  lastNotifiedAt?: Maybe<Scalars["Date"]["output"]>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
  userId?: Maybe<Scalars["ID"]["output"]>;
};

export type SavedSearchInput = {
  alertEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  filtersJson: Scalars["String"]["input"];
};

export type ScheduleViewingInput = {
  scheduledAt: Scalars["Date"]["input"];
};

export type SellDetail = {
  __typename?: "SellDetail";
  commissionPaidBy?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  inspectionStatus?: Maybe<Scalars["String"]["output"]>;
  isOffMarket?: Maybe<Scalars["Boolean"]["output"]>;
  priceHistory?: Maybe<Array<PriceHistory>>;
  propertyId?: Maybe<Scalars["ID"]["output"]>;
  sellerType?: Maybe<Scalars["String"]["output"]>;
};

export type SellDetailInput = {
  commissionPaidBy?: InputMaybe<Scalars["String"]["input"]>;
  inspectionStatus?: InputMaybe<Scalars["String"]["input"]>;
  isOffMarket?: InputMaybe<Scalars["Boolean"]["input"]>;
  sellerType?: InputMaybe<Scalars["String"]["input"]>;
};

export type SendMessageInput = {
  body: Scalars["String"]["input"];
};

export type ServiceListing = {
  __typename?: "ServiceListing";
  category?: Maybe<Scalars["String"]["output"]>;
  city?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  currency?: Maybe<Scalars["String"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  imageUrlsJson?: Maybe<Scalars["String"]["output"]>;
  provider?: Maybe<ServiceProvider>;
  providerId?: Maybe<Scalars["ID"]["output"]>;
  publishedAt?: Maybe<Scalars["Date"]["output"]>;
  serviceArea?: Maybe<Scalars["String"]["output"]>;
  slug?: Maybe<Scalars["String"]["output"]>;
  startingPrice?: Maybe<Scalars["Float"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
};

export type ServiceListingFilterInput = {
  category?: InputMaybe<Scalars["String"]["input"]>;
  city?: InputMaybe<Scalars["String"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  providerId?: InputMaybe<Scalars["ID"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type ServiceListingInput = {
  category: Scalars["String"]["input"];
  city: Scalars["String"]["input"];
  currency?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  imageUrlsJson?: InputMaybe<Scalars["String"]["input"]>;
  providerId?: InputMaybe<Scalars["ID"]["input"]>;
  serviceArea?: InputMaybe<Scalars["String"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  startingPrice?: InputMaybe<Scalars["Float"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  title: Scalars["String"]["input"];
};

export type ServiceListingUpdateInput = {
  category?: InputMaybe<Scalars["String"]["input"]>;
  city?: InputMaybe<Scalars["String"]["input"]>;
  currency?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  imageUrlsJson?: InputMaybe<Scalars["String"]["input"]>;
  serviceArea?: InputMaybe<Scalars["String"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  startingPrice?: InputMaybe<Scalars["Float"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type ServiceProvider = {
  __typename?: "ServiceProvider";
  businessName?: Maybe<Scalars["String"]["output"]>;
  city?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  isVerified?: Maybe<Scalars["Boolean"]["output"]>;
  logoUrl?: Maybe<Scalars["String"]["output"]>;
  ownerName?: Maybe<Scalars["String"]["output"]>;
  phone?: Maybe<Scalars["String"]["output"]>;
  serviceArea?: Maybe<Scalars["String"]["output"]>;
  slug?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
  userId?: Maybe<Scalars["ID"]["output"]>;
};

export type ServiceProviderFilterInput = {
  city?: InputMaybe<Scalars["String"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  q?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type ServiceProviderInput = {
  businessName: Scalars["String"]["input"];
  city: Scalars["String"]["input"];
  description?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  logoUrl?: InputMaybe<Scalars["String"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  serviceArea?: InputMaybe<Scalars["String"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type ServiceProviderUpdateInput = {
  businessName?: InputMaybe<Scalars["String"]["input"]>;
  city?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  logoUrl?: InputMaybe<Scalars["String"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  serviceArea?: InputMaybe<Scalars["String"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type ServiceRequest = {
  __typename?: "ServiceRequest";
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  listing?: Maybe<ServiceListing>;
  listingId?: Maybe<Scalars["ID"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
  preferredDate?: Maybe<Scalars["Date"]["output"]>;
  requesterId?: Maybe<Scalars["ID"]["output"]>;
  requesterName?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
};

export type ServiceRequestInput = {
  message?: InputMaybe<Scalars["String"]["input"]>;
  preferredDate?: InputMaybe<Scalars["Date"]["input"]>;
};

export type ServiceRequestStatusInput = {
  status: Scalars["String"]["input"];
};

export type StaticPage = {
  __typename?: "StaticPage";
  content?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  createdById?: Maybe<Scalars["ID"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  publishedAt?: Maybe<Scalars["Date"]["output"]>;
  slug?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  summary?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
};

export type StaticPageFilterInput = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  q?: InputMaybe<Scalars["String"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type StaticPageInput = {
  content: Scalars["String"]["input"];
  slug: Scalars["String"]["input"];
  status?: InputMaybe<Scalars["String"]["input"]>;
  summary?: InputMaybe<Scalars["String"]["input"]>;
  title: Scalars["String"]["input"];
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type StaticPageUpdateInput = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  summary?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type SubscribeToPlanInput = {
  agentId?: InputMaybe<Scalars["ID"]["input"]>;
  planId: Scalars["ID"]["input"];
};

export type SubscriptionPlan = {
  __typename?: "SubscriptionPlan";
  boostCredits?: Maybe<Scalars["Int"]["output"]>;
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  durationDays?: Maybe<Scalars["Int"]["output"]>;
  featuresJson?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  listingLimit?: Maybe<Scalars["Int"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
};

export type SubscriptionPlanInput = {
  boostCredits: Scalars["Int"]["input"];
  durationDays: Scalars["Int"]["input"];
  featuresJson?: InputMaybe<Scalars["String"]["input"]>;
  listingLimit: Scalars["Int"]["input"];
  name: Scalars["String"]["input"];
  price: Scalars["Float"]["input"];
};

export type SubscriptionPlanUpdateInput = {
  boostCredits?: InputMaybe<Scalars["Int"]["input"]>;
  durationDays?: InputMaybe<Scalars["Int"]["input"]>;
  featuresJson?: InputMaybe<Scalars["String"]["input"]>;
  listingLimit?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<Scalars["Float"]["input"]>;
};

export type User = {
  __typename?: "User";
  admin?: Maybe<Admin>;
  email?: Maybe<Scalars["String"]["output"]>;
  emailVerified?: Maybe<Scalars["Boolean"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  image?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  renter?: Maybe<Renter>;
  role?: Maybe<Scalars["String"]["output"]>;
};

export type UserSearchInput = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserUpdateInput = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type Viewing = {
  __typename?: "Viewing";
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  inquiryId?: Maybe<Scalars["ID"]["output"]>;
  property?: Maybe<Property>;
  propertyId?: Maybe<Scalars["ID"]["output"]>;
  scheduledAt?: Maybe<Scalars["Date"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
  userId?: Maybe<Scalars["ID"]["output"]>;
};

export type ViewingFilterInput = {
  inquiryId?: InputMaybe<Scalars["ID"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  propertyId?: InputMaybe<Scalars["ID"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryAdminQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type QueryAdminQuery = {
  __typename?: "Query";
  admin?: {
    __typename?: "Admin";
    id?: string | null;
    userId?: string | null;
    user?: {
      __typename?: "User";
      id?: string | null;
      name?: string | null;
      email?: string | null;
      role?: string | null;
    } | null;
  } | null;
};

export type QueryAdminAnalyticsOverviewQueryVariables = Exact<{
  [key: string]: never;
}>;

export type QueryAdminAnalyticsOverviewQuery = {
  __typename?: "Query";
  adminAnalyticsOverview?: {
    __typename?: "AdminAnalyticsOverview";
    activeSubscriptions?: number | null;
    openReports?: number | null;
    pendingProperties?: number | null;
    totalInquiries?: number | null;
    totalProperties?: number | null;
  } | null;
};

export type QueryAdminPendingPropertiesQueryVariables = Exact<{
  [key: string]: never;
}>;

export type QueryAdminPendingPropertiesQuery = {
  __typename?: "Query";
  adminPendingProperties?: Array<{
    __typename?: "Property";
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    availableFrom?: any | null;
    bathrooms?: number | null;
    bedrooms?: number | null;
    builtUpArea?: number | null;
    amenities?: Array<{
      __typename?: "PropertyAmenity";
      amenityId?: string | null;
      propertyId?: string | null;
    }> | null;
    buyDetail?: {
      __typename?: "BuyDetail";
      id?: string | null;
      developerName?: string | null;
      handoverDate?: any | null;
      isDeveloper?: boolean | null;
    } | null;
    documents?: Array<{
      __typename?: "PropertyDocument";
      id?: string | null;
      label?: string | null;
      type?: string | null;
      url?: string | null;
    }> | null;
  }> | null;
};

export type QueryAdminsQueryVariables = Exact<{ [key: string]: never }>;

export type QueryAdminsQuery = {
  __typename?: "Query";
  admins?: Array<{
    __typename?: "Admin";
    id?: string | null;
    userId?: string | null;
    user?: {
      __typename?: "User";
      id?: string | null;
      name?: string | null;
      email?: string | null;
      role?: string | null;
    } | null;
  }> | null;
};

export type QueryAgencyQueryVariables = Exact<{
  agencyId: Scalars["ID"]["input"];
}>;

export type QueryAgencyQuery = {
  __typename?: "Query";
  agency?: {
    __typename?: "Agency";
    id?: string | null;
    name?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    licenseNumber?: string | null;
    logo?: string | null;
    ownerId?: string | null;
  } | null;
};

export type QueryAgencyAdvertisingRequestsQueryVariables = Exact<{
  filter?: InputMaybe<AgencyAdvertisingRequestFilterInput>;
}>;

export type QueryAgencyAdvertisingRequestsQuery = {
  __typename?: "Query";
  agencyAdvertisingRequests?: Array<{
    __typename?: "AgencyAdvertisingRequest";
    id?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    agencyName?: string | null;
    budget?: string | null;
    contactEmail?: string | null;
    contactPhone?: string | null;
    message?: string | null;
    rejectionReason?: string | null;
  }> | null;
};

export type QueryAmenitiesQueryVariables = Exact<{
  filter?: InputMaybe<AmenityFilterInput>;
}>;

export type QueryAmenitiesQuery = {
  __typename?: "Query";
  amenities?: Array<{
    __typename?: "Amenity";
    id?: string | null;
    name?: string | null;
    category?: string | null;
  }> | null;
};

export type QueryArticleQueryVariables = Exact<{
  articleId: Scalars["ID"]["input"];
}>;

export type QueryArticleQuery = {
  __typename?: "Query";
  article?: {
    __typename?: "Article";
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    authorId?: string | null;
    authorName?: string | null;
    categoryId?: string | null;
    content?: string | null;
    category?: {
      __typename?: "ArticleCategory";
      id?: string | null;
      slug?: string | null;
      name?: string | null;
      createdAt?: any | null;
    } | null;
  } | null;
};

export type QueryArticleBySlugQueryVariables = Exact<{
  slug: Scalars["String"]["input"];
}>;

export type QueryArticleBySlugQuery = {
  __typename?: "Query";
  articleBySlug?: {
    __typename?: "Article";
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    authorId?: string | null;
    authorName?: string | null;
    categoryId?: string | null;
    content?: string | null;
    category?: {
      __typename?: "ArticleCategory";
      id?: string | null;
      slug?: string | null;
      name?: string | null;
      createdAt?: any | null;
    } | null;
  } | null;
};

export type QueryArticleCategoriesQueryVariables = Exact<{
  [key: string]: never;
}>;

export type QueryArticleCategoriesQuery = {
  __typename?: "Query";
  articleCategories?: Array<{
    __typename?: "ArticleCategory";
    id?: string | null;
    slug?: string | null;
    name?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    code?: string | null;
  }> | null;
};

export type QueryArticlesQueryVariables = Exact<{
  filter?: InputMaybe<ArticleFilterInput>;
}>;

export type QueryArticlesQuery = {
  __typename?: "Query";
  articles?: Array<{
    __typename?: "Article";
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    authorId?: string | null;
    authorName?: string | null;
    categoryId?: string | null;
    content?: string | null;
    category?: {
      __typename?: "ArticleCategory";
      id?: string | null;
      slug?: string | null;
      name?: string | null;
      createdAt?: any | null;
    } | null;
  }> | null;
};

export type QueryAttorneyQueryVariables = Exact<{
  attorneyId: Scalars["ID"]["input"];
}>;

export type QueryAttorneyQuery = {
  __typename?: "Query";
  attorney?: {
    __typename?: "AttorneyProfile";
    id?: string | null;
    slug?: string | null;
    name?: string | null;
    email?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    city?: string | null;
    createdById?: string | null;
    description?: string | null;
  } | null;
};

export type QueryAttorneysQueryVariables = Exact<{
  filter?: InputMaybe<AttorneyFilterInput>;
}>;

export type QueryAttorneysQuery = {
  __typename?: "Query";
  attorneys?: Array<{
    __typename?: "AttorneyProfile";
    id?: string | null;
    slug?: string | null;
    name?: string | null;
    email?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    city?: string | null;
    createdById?: string | null;
    description?: string | null;
  }> | null;
};

export type QueryCareerPostQueryVariables = Exact<{
  careerPostId: Scalars["ID"]["input"];
}>;

export type QueryCareerPostQuery = {
  __typename?: "Query";
  careerPost?: {
    __typename?: "CareerPost";
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    createdById?: string | null;
    description?: string | null;
    employmentType?: string | null;
    location?: string | null;
  } | null;
};

export type QueryCareerPostsQueryVariables = Exact<{
  filter?: InputMaybe<CareerPostFilterInput>;
}>;

export type QueryCareerPostsQuery = {
  __typename?: "Query";
  careerPosts?: Array<{
    __typename?: "CareerPost";
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    createdById?: string | null;
    description?: string | null;
    employmentType?: string | null;
    location?: string | null;
  }> | null;
};

export type QueryContactMessagesQueryVariables = Exact<{
  filter?: InputMaybe<ContactMessageFilterInput>;
}>;

export type QueryContactMessagesQuery = {
  __typename?: "Query";
  contactMessages?: Array<{
    __typename?: "ContactMessage";
    id?: string | null;
    name?: string | null;
    email?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    message?: string | null;
    phone?: string | null;
    subject?: string | null;
    userId?: string | null;
  }> | null;
};

export type QueryConversationQueryVariables = Exact<{
  conversationId: Scalars["ID"]["input"];
}>;

export type QueryConversationQuery = {
  __typename?: "Query";
  conversation?: {
    __typename?: "Conversation";
    id?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    contextId?: string | null;
    contextType?: string | null;
    createdById?: string | null;
    lastMessageAt?: any | null;
    subject?: string | null;
    participants?: Array<{
      __typename?: "ConversationParticipant";
      archivedAt?: any | null;
      conversationId?: string | null;
      joinedAt?: any | null;
      lastReadAt?: any | null;
    }> | null;
  } | null;
};

export type QueryConversationsQueryVariables = Exact<{
  filter?: InputMaybe<ConversationFilterInput>;
}>;

export type QueryConversationsQuery = {
  __typename?: "Query";
  conversations?: Array<{
    __typename?: "Conversation";
    id?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    contextId?: string | null;
    contextType?: string | null;
    createdById?: string | null;
    lastMessageAt?: any | null;
    subject?: string | null;
    participants?: Array<{
      __typename?: "ConversationParticipant";
      archivedAt?: any | null;
      conversationId?: string | null;
      joinedAt?: any | null;
      lastReadAt?: any | null;
    }> | null;
  }> | null;
};

export type QueryInquiriesQueryVariables = Exact<{
  filter?: InputMaybe<InquiryFilterInput>;
}>;

export type QueryInquiriesQuery = {
  __typename?: "Query";
  inquiries?: Array<{
    __typename?: "Inquiry";
    id?: string | null;
    name?: string | null;
    email?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    message?: string | null;
    phone?: string | null;
    propertyId?: string | null;
    source?: string | null;
    property?: {
      __typename?: "Property";
      id?: string | null;
      slug?: string | null;
      title?: string | null;
      status?: string | null;
    } | null;
  }> | null;
};

export type QueryInquiryQueryVariables = Exact<{
  inquiryId: Scalars["ID"]["input"];
}>;

export type QueryInquiryQuery = {
  __typename?: "Query";
  inquiry?: {
    __typename?: "Inquiry";
    id?: string | null;
    name?: string | null;
    email?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    message?: string | null;
    phone?: string | null;
    propertyId?: string | null;
    source?: string | null;
    property?: {
      __typename?: "Property";
      id?: string | null;
      slug?: string | null;
      title?: string | null;
      status?: string | null;
    } | null;
  } | null;
};

export type QueryMarketplaceItemQueryVariables = Exact<{
  itemId: Scalars["ID"]["input"];
}>;

export type QueryMarketplaceItemQuery = {
  __typename?: "Query";
  marketplaceItem?: {
    __typename?: "MarketplaceItem";
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    archivedAt?: any | null;
    category?: string | null;
    city?: string | null;
    condition?: string | null;
  } | null;
};

export type QueryMarketplaceItemsQueryVariables = Exact<{
  filter?: InputMaybe<MarketplaceItemFilterInput>;
}>;

export type QueryMarketplaceItemsQuery = {
  __typename?: "Query";
  marketplaceItems?: Array<{
    __typename?: "MarketplaceItem";
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    archivedAt?: any | null;
    category?: string | null;
    city?: string | null;
    condition?: string | null;
  }> | null;
};

export type QueryMeQueryVariables = Exact<{ [key: string]: never }>;

export type QueryMeQuery = {
  __typename?: "Query";
  me?: {
    __typename?: "User";
    id?: string | null;
    name?: string | null;
    email?: string | null;
    role?: string | null;
    emailVerified?: boolean | null;
    image?: string | null;
    admin?: {
      __typename?: "Admin";
      id?: string | null;
      userId?: string | null;
    } | null;
    renter?: {
      __typename?: "Renter";
      id?: string | null;
      createdAt?: any | null;
      updatedAt?: any | null;
      userId?: string | null;
    } | null;
  } | null;
};

export type QueryMessagesQueryVariables = Exact<{
  conversationId: Scalars["ID"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type QueryMessagesQuery = {
  __typename?: "Query";
  messages?: Array<{
    __typename?: "ConversationMessage";
    id?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    body?: string | null;
    conversationId?: string | null;
    senderId?: string | null;
    type?: string | null;
  }> | null;
};

export type QueryMyMarketplaceItemsQueryVariables = Exact<{
  [key: string]: never;
}>;

export type QueryMyMarketplaceItemsQuery = {
  __typename?: "Query";
  myMarketplaceItems?: Array<{
    __typename?: "MarketplaceItem";
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    archivedAt?: any | null;
    category?: string | null;
    city?: string | null;
    condition?: string | null;
  }> | null;
};

export type QueryMyProfileQueryVariables = Exact<{ [key: string]: never }>;

export type QueryMyProfileQuery = {
  __typename?: "Query";
  myProfile?: {
    __typename?: "Renter";
    id?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    userId?: string | null;
    user?: {
      __typename?: "User";
      id?: string | null;
      name?: string | null;
      email?: string | null;
      role?: string | null;
    } | null;
  } | null;
};

export type QueryMyRoommateProfileQueryVariables = Exact<{
  [key: string]: never;
}>;

export type QueryMyRoommateProfileQuery = {
  __typename?: "Query";
  myRoommateProfile?: {
    __typename?: "RoommateProfile";
    id?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    age?: number | null;
    area?: string | null;
    bio?: string | null;
    budgetMax?: number | null;
    budgetMin?: number | null;
    city?: string | null;
  } | null;
};

export type QueryMyServiceRequestsQueryVariables = Exact<{
  [key: string]: never;
}>;

export type QueryMyServiceRequestsQuery = {
  __typename?: "Query";
  myServiceRequests?: Array<{
    __typename?: "ServiceRequest";
    id?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    listingId?: string | null;
    message?: string | null;
    preferredDate?: any | null;
    requesterId?: string | null;
    requesterName?: string | null;
    listing?: {
      __typename?: "ServiceListing";
      id?: string | null;
      slug?: string | null;
      title?: string | null;
      status?: string | null;
    } | null;
  }> | null;
};

export type QueryMySubscriptionsQueryVariables = Exact<{
  [key: string]: never;
}>;

export type QueryMySubscriptionsQuery = {
  __typename?: "Query";
  mySubscriptions?: Array<{
    __typename?: "AgentSubscription";
    id?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    agentId?: string | null;
    expiresAt?: any | null;
    isActive?: boolean | null;
    planId?: string | null;
    startsAt?: any | null;
    plan?: {
      __typename?: "SubscriptionPlan";
      id?: string | null;
      name?: string | null;
      createdAt?: any | null;
      updatedAt?: any | null;
    } | null;
  }> | null;
};

export type QueryNotificationsQueryVariables = Exact<{
  filter?: InputMaybe<NotificationFilterInput>;
}>;

export type QueryNotificationsQuery = {
  __typename?: "Query";
  notifications?: Array<{
    __typename?: "Notification";
    id?: string | null;
    title?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    body?: string | null;
    isRead?: boolean | null;
    metadataJson?: string | null;
    type?: string | null;
    userId?: string | null;
  }> | null;
};

export type QueryProfessionalApplicationsQueryVariables = Exact<{
  filter?: InputMaybe<AgentApplicationFilterInput>;
}>;

export type QueryProfessionalApplicationsQuery = {
  __typename?: "Query";
  professionalApplications?: Array<{
    __typename?: "AgentApplication";
    id?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    applicantEmail?: string | null;
    applicantName?: string | null;
    city?: string | null;
    experience?: string | null;
    licenseNumber?: string | null;
    motivation?: string | null;
  }> | null;
};

export type QueryPropertiesQueryVariables = Exact<{
  filter?: InputMaybe<PropertyFilterInput>;
}>;

export type QueryPropertiesQuery = {
  __typename?: "Query";
  properties?: Array<{
    __typename?: "Property";
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    availableFrom?: any | null;
    bathrooms?: number | null;
    bedrooms?: number | null;
    builtUpArea?: number | null;
    amenities?: Array<{
      __typename?: "PropertyAmenity";
      amenityId?: string | null;
      propertyId?: string | null;
    }> | null;
    buyDetail?: {
      __typename?: "BuyDetail";
      id?: string | null;
      developerName?: string | null;
      handoverDate?: any | null;
      isDeveloper?: boolean | null;
    } | null;
    documents?: Array<{
      __typename?: "PropertyDocument";
      id?: string | null;
      label?: string | null;
      type?: string | null;
      url?: string | null;
    }> | null;
  }> | null;
};

export type QueryPropertyQueryVariables = Exact<{
  slug: Scalars["String"]["input"];
}>;

export type QueryPropertyQuery = {
  __typename?: "Query";
  property?: {
    __typename?: "Property";
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    availableFrom?: any | null;
    bathrooms?: number | null;
    bedrooms?: number | null;
    builtUpArea?: number | null;
    amenities?: Array<{
      __typename?: "PropertyAmenity";
      amenityId?: string | null;
      propertyId?: string | null;
    }> | null;
    buyDetail?: {
      __typename?: "BuyDetail";
      id?: string | null;
      developerName?: string | null;
      handoverDate?: any | null;
      isDeveloper?: boolean | null;
    } | null;
    documents?: Array<{
      __typename?: "PropertyDocument";
      id?: string | null;
      label?: string | null;
      type?: string | null;
      url?: string | null;
    }> | null;
  } | null;
};

export type QueryPropertyAnalyticsQueryVariables = Exact<{
  propertyId: Scalars["ID"]["input"];
}>;

export type QueryPropertyAnalyticsQuery = {
  __typename?: "Query";
  propertyAnalytics?: {
    __typename?: "PropertyAnalytics";
    inquiries?: number | null;
    reviews?: number | null;
    viewings?: number | null;
    views?: number | null;
  } | null;
};

export type QueryPropertyBoostsQueryVariables = Exact<{
  propertyId: Scalars["ID"]["input"];
}>;

export type QueryPropertyBoostsQuery = {
  __typename?: "Query";
  propertyBoosts?: Array<{
    __typename?: "ListingBoost";
    id?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    agentId?: string | null;
    expiresAt?: any | null;
    propertyId?: string | null;
    startsAt?: any | null;
    type?: string | null;
    property?: {
      __typename?: "Property";
      id?: string | null;
      slug?: string | null;
      title?: string | null;
      status?: string | null;
    } | null;
  }> | null;
};

export type QueryPropertyBuyDetailQueryVariables = Exact<{
  propertyId: Scalars["ID"]["input"];
}>;

export type QueryPropertyBuyDetailQuery = {
  __typename?: "Query";
  propertyBuyDetail?: {
    __typename?: "BuyDetail";
    id?: string | null;
    developerName?: string | null;
    handoverDate?: any | null;
    isDeveloper?: boolean | null;
    ownerType?: string | null;
    ownership?: string | null;
    projectName?: string | null;
    paymentPlan?: {
      __typename?: "PaymentPlan";
      id?: string | null;
      createdAt?: any | null;
      updatedAt?: any | null;
    } | null;
  } | null;
};

export type QueryPropertyMediaQueryVariables = Exact<{
  propertyId: Scalars["ID"]["input"];
}>;

export type QueryPropertyMediaQuery = {
  __typename?: "Query";
  propertyMedia?: Array<{
    __typename?: "PropertyMedia";
    id?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    isPrimary?: boolean | null;
    order?: number | null;
    type?: string | null;
    url?: string | null;
  }> | null;
};

export type QueryPropertyPriceHistoryQueryVariables = Exact<{
  propertyId: Scalars["ID"]["input"];
}>;

export type QueryPropertyPriceHistoryQuery = {
  __typename?: "Query";
  propertyPriceHistory?: Array<{
    __typename?: "PriceHistory";
    id?: string | null;
    changedAt?: any | null;
    price?: number | null;
    propertyId?: string | null;
  }> | null;
};

export type QueryPropertyRentDetailQueryVariables = Exact<{
  propertyId: Scalars["ID"]["input"];
}>;

export type QueryPropertyRentDetailQuery = {
  __typename?: "Query";
  propertyRentDetail?: {
    __typename?: "RentDetail";
    id?: string | null;
    cheques?: number | null;
    chillerIncluded?: boolean | null;
    depositAmount?: number | null;
    maintenanceBy?: string | null;
    minLeaseTerm?: number | null;
    petsAllowed?: boolean | null;
  } | null;
};

export type QueryPropertyReviewsQueryVariables = Exact<{
  propertyId: Scalars["ID"]["input"];
}>;

export type QueryPropertyReviewsQuery = {
  __typename?: "Query";
  propertyReviews?: Array<{
    __typename?: "Review";
    id?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    comment?: string | null;
    propertyId?: string | null;
    rating?: number | null;
    userId?: string | null;
    property?: {
      __typename?: "Property";
      id?: string | null;
      slug?: string | null;
      title?: string | null;
      status?: string | null;
    } | null;
  }> | null;
};

export type QueryPropertySearchQueryVariables = Exact<{
  filter?: InputMaybe<PropertySearchInput>;
}>;

export type QueryPropertySearchQuery = {
  __typename?: "Query";
  propertySearch?: Array<{
    __typename?: "Property";
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    availableFrom?: any | null;
    bathrooms?: number | null;
    bedrooms?: number | null;
    builtUpArea?: number | null;
    amenities?: Array<{
      __typename?: "PropertyAmenity";
      amenityId?: string | null;
      propertyId?: string | null;
    }> | null;
    buyDetail?: {
      __typename?: "BuyDetail";
      id?: string | null;
      developerName?: string | null;
      handoverDate?: any | null;
      isDeveloper?: boolean | null;
    } | null;
    documents?: Array<{
      __typename?: "PropertyDocument";
      id?: string | null;
      label?: string | null;
      type?: string | null;
      url?: string | null;
    }> | null;
  }> | null;
};

export type QueryPropertySellDetailQueryVariables = Exact<{
  propertyId: Scalars["ID"]["input"];
}>;

export type QueryPropertySellDetailQuery = {
  __typename?: "Query";
  propertySellDetail?: {
    __typename?: "SellDetail";
    id?: string | null;
    commissionPaidBy?: string | null;
    inspectionStatus?: string | null;
    isOffMarket?: boolean | null;
    propertyId?: string | null;
    sellerType?: string | null;
    priceHistory?: Array<{
      __typename?: "PriceHistory";
      id?: string | null;
      changedAt?: any | null;
      price?: number | null;
      propertyId?: string | null;
    }> | null;
  } | null;
};

export type QueryPropertySellPriceHistoryQueryVariables = Exact<{
  propertyId: Scalars["ID"]["input"];
}>;

export type QueryPropertySellPriceHistoryQuery = {
  __typename?: "Query";
  propertySellPriceHistory?: Array<{
    __typename?: "PriceHistory";
    id?: string | null;
    changedAt?: any | null;
    price?: number | null;
    propertyId?: string | null;
  }> | null;
};

export type QueryRenterQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type QueryRenterQuery = {
  __typename?: "Query";
  renter?: {
    __typename?: "Renter";
    id?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    userId?: string | null;
    user?: {
      __typename?: "User";
      id?: string | null;
      name?: string | null;
      email?: string | null;
      role?: string | null;
    } | null;
  } | null;
};

export type QueryRentersQueryVariables = Exact<{
  search?: InputMaybe<RenterSearchInput>;
}>;

export type QueryRentersQuery = {
  __typename?: "Query";
  renters?: Array<{
    __typename?: "Renter";
    id?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    userId?: string | null;
    user?: {
      __typename?: "User";
      id?: string | null;
      name?: string | null;
      email?: string | null;
      role?: string | null;
    } | null;
  }> | null;
};

export type QueryReportsQueryVariables = Exact<{
  filter?: InputMaybe<ReportFilterInput>;
}>;

export type QueryReportsQuery = {
  __typename?: "Query";
  reports?: Array<{
    __typename?: "Report";
    id?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    description?: string | null;
    propertyId?: string | null;
    reason?: string | null;
    userId?: string | null;
    property?: {
      __typename?: "Property";
      id?: string | null;
      slug?: string | null;
      title?: string | null;
      status?: string | null;
    } | null;
  }> | null;
};

export type QueryRoommateProfileQueryVariables = Exact<{
  profileId: Scalars["ID"]["input"];
}>;

export type QueryRoommateProfileQuery = {
  __typename?: "Query";
  roommateProfile?: {
    __typename?: "RoommateProfile";
    id?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    age?: number | null;
    area?: string | null;
    bio?: string | null;
    budgetMax?: number | null;
    budgetMin?: number | null;
    city?: string | null;
  } | null;
};

export type QueryRoommateProfilesQueryVariables = Exact<{
  filter?: InputMaybe<RoommateProfileFilterInput>;
}>;

export type QueryRoommateProfilesQuery = {
  __typename?: "Query";
  roommateProfiles?: Array<{
    __typename?: "RoommateProfile";
    id?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    age?: number | null;
    area?: string | null;
    bio?: string | null;
    budgetMax?: number | null;
    budgetMin?: number | null;
    city?: string | null;
  }> | null;
};

export type QuerySavedMarketplaceItemsQueryVariables = Exact<{
  [key: string]: never;
}>;

export type QuerySavedMarketplaceItemsQuery = {
  __typename?: "Query";
  savedMarketplaceItems?: Array<{
    __typename?: "MarketplaceSavedItem";
    itemId?: string | null;
    savedAt?: any | null;
    userId?: string | null;
    item?: {
      __typename?: "MarketplaceItem";
      id?: string | null;
      slug?: string | null;
      title?: string | null;
      status?: string | null;
    } | null;
  }> | null;
};

export type QuerySavedPropertiesQueryVariables = Exact<{
  [key: string]: never;
}>;

export type QuerySavedPropertiesQuery = {
  __typename?: "Query";
  savedProperties?: Array<{
    __typename?: "SavedProperty";
    propertyId?: string | null;
    savedAt?: any | null;
    userId?: string | null;
    property?: {
      __typename?: "Property";
      id?: string | null;
      slug?: string | null;
      title?: string | null;
      status?: string | null;
    } | null;
  }> | null;
};

export type QuerySavedRoommateProfilesQueryVariables = Exact<{
  [key: string]: never;
}>;

export type QuerySavedRoommateProfilesQuery = {
  __typename?: "Query";
  savedRoommateProfiles?: Array<{
    __typename?: "RoommateSavedProfile";
    profileId?: string | null;
    savedAt?: any | null;
    userId?: string | null;
    profile?: {
      __typename?: "RoommateProfile";
      id?: string | null;
      status?: string | null;
      createdAt?: any | null;
      updatedAt?: any | null;
    } | null;
  }> | null;
};

export type QuerySavedSearchesQueryVariables = Exact<{ [key: string]: never }>;

export type QuerySavedSearchesQuery = {
  __typename?: "Query";
  savedSearches?: Array<{
    __typename?: "SavedSearch";
    id?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    alertEnabled?: boolean | null;
    filtersJson?: string | null;
    lastNotifiedAt?: any | null;
    userId?: string | null;
  }> | null;
};

export type QueryServiceListingQueryVariables = Exact<{
  listingId: Scalars["ID"]["input"];
}>;

export type QueryServiceListingQuery = {
  __typename?: "Query";
  serviceListing?: {
    __typename?: "ServiceListing";
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    category?: string | null;
    city?: string | null;
    currency?: string | null;
    description?: string | null;
    provider?: {
      __typename?: "ServiceProvider";
      id?: string | null;
      slug?: string | null;
      email?: string | null;
      status?: string | null;
    } | null;
  } | null;
};

export type QueryServiceListingsQueryVariables = Exact<{
  filter?: InputMaybe<ServiceListingFilterInput>;
}>;

export type QueryServiceListingsQuery = {
  __typename?: "Query";
  serviceListings?: Array<{
    __typename?: "ServiceListing";
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    category?: string | null;
    city?: string | null;
    currency?: string | null;
    description?: string | null;
    provider?: {
      __typename?: "ServiceProvider";
      id?: string | null;
      slug?: string | null;
      email?: string | null;
      status?: string | null;
    } | null;
  }> | null;
};

export type QueryServiceProviderQueryVariables = Exact<{
  providerId: Scalars["ID"]["input"];
}>;

export type QueryServiceProviderQuery = {
  __typename?: "Query";
  serviceProvider?: {
    __typename?: "ServiceProvider";
    id?: string | null;
    slug?: string | null;
    email?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    businessName?: string | null;
    city?: string | null;
    description?: string | null;
    isVerified?: boolean | null;
  } | null;
};

export type QueryServiceProvidersQueryVariables = Exact<{
  filter?: InputMaybe<ServiceProviderFilterInput>;
}>;

export type QueryServiceProvidersQuery = {
  __typename?: "Query";
  serviceProviders?: Array<{
    __typename?: "ServiceProvider";
    id?: string | null;
    slug?: string | null;
    email?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    businessName?: string | null;
    city?: string | null;
    description?: string | null;
    isVerified?: boolean | null;
  }> | null;
};

export type QuerySimilarPropertiesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  propertyId: Scalars["ID"]["input"];
}>;

export type QuerySimilarPropertiesQuery = {
  __typename?: "Query";
  similarProperties?: Array<{
    __typename?: "Property";
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    availableFrom?: any | null;
    bathrooms?: number | null;
    bedrooms?: number | null;
    builtUpArea?: number | null;
    amenities?: Array<{
      __typename?: "PropertyAmenity";
      amenityId?: string | null;
      propertyId?: string | null;
    }> | null;
    buyDetail?: {
      __typename?: "BuyDetail";
      id?: string | null;
      developerName?: string | null;
      handoverDate?: any | null;
      isDeveloper?: boolean | null;
    } | null;
    documents?: Array<{
      __typename?: "PropertyDocument";
      id?: string | null;
      label?: string | null;
      type?: string | null;
      url?: string | null;
    }> | null;
  }> | null;
};

export type QueryStaticPageQueryVariables = Exact<{
  pageId: Scalars["ID"]["input"];
}>;

export type QueryStaticPageQuery = {
  __typename?: "Query";
  staticPage?: {
    __typename?: "StaticPage";
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    content?: string | null;
    createdById?: string | null;
    publishedAt?: any | null;
    summary?: string | null;
  } | null;
};

export type QueryStaticPageBySlugQueryVariables = Exact<{
  slug: Scalars["String"]["input"];
}>;

export type QueryStaticPageBySlugQuery = {
  __typename?: "Query";
  staticPageBySlug?: {
    __typename?: "StaticPage";
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    content?: string | null;
    createdById?: string | null;
    publishedAt?: any | null;
    summary?: string | null;
  } | null;
};

export type QueryStaticPagesQueryVariables = Exact<{
  filter?: InputMaybe<StaticPageFilterInput>;
}>;

export type QueryStaticPagesQuery = {
  __typename?: "Query";
  staticPages?: Array<{
    __typename?: "StaticPage";
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    content?: string | null;
    createdById?: string | null;
    publishedAt?: any | null;
    summary?: string | null;
  }> | null;
};

export type QuerySubscriptionPlansQueryVariables = Exact<{
  [key: string]: never;
}>;

export type QuerySubscriptionPlansQuery = {
  __typename?: "Query";
  subscriptionPlans?: Array<{
    __typename?: "SubscriptionPlan";
    id?: string | null;
    name?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    boostCredits?: number | null;
    durationDays?: number | null;
    featuresJson?: string | null;
    listingLimit?: number | null;
    price?: number | null;
  }> | null;
};

export type QueryUserQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type QueryUserQuery = {
  __typename?: "Query";
  user?: {
    __typename?: "User";
    id?: string | null;
    name?: string | null;
    email?: string | null;
    role?: string | null;
    emailVerified?: boolean | null;
    image?: string | null;
    admin?: {
      __typename?: "Admin";
      id?: string | null;
      userId?: string | null;
    } | null;
    renter?: {
      __typename?: "Renter";
      id?: string | null;
      createdAt?: any | null;
      updatedAt?: any | null;
      userId?: string | null;
    } | null;
  } | null;
};

export type QueryUsersQueryVariables = Exact<{
  search?: InputMaybe<UserSearchInput>;
}>;

export type QueryUsersQuery = {
  __typename?: "Query";
  users?: Array<{
    __typename?: "User";
    id?: string | null;
    name?: string | null;
    email?: string | null;
    role?: string | null;
    emailVerified?: boolean | null;
    image?: string | null;
    admin?: {
      __typename?: "Admin";
      id?: string | null;
      userId?: string | null;
    } | null;
    renter?: {
      __typename?: "Renter";
      id?: string | null;
      createdAt?: any | null;
      updatedAt?: any | null;
      userId?: string | null;
    } | null;
  }> | null;
};

export type QueryViewingQueryVariables = Exact<{
  viewingId: Scalars["ID"]["input"];
}>;

export type QueryViewingQuery = {
  __typename?: "Query";
  viewing?: {
    __typename?: "Viewing";
    id?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    inquiryId?: string | null;
    propertyId?: string | null;
    scheduledAt?: any | null;
    userId?: string | null;
    property?: {
      __typename?: "Property";
      id?: string | null;
      slug?: string | null;
      title?: string | null;
      status?: string | null;
    } | null;
  } | null;
};

export type QueryViewingsQueryVariables = Exact<{
  filter?: InputMaybe<ViewingFilterInput>;
}>;

export type QueryViewingsQuery = {
  __typename?: "Query";
  viewings?: Array<{
    __typename?: "Viewing";
    id?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    inquiryId?: string | null;
    propertyId?: string | null;
    scheduledAt?: any | null;
    userId?: string | null;
    property?: {
      __typename?: "Property";
      id?: string | null;
      slug?: string | null;
      title?: string | null;
      status?: string | null;
    } | null;
  }> | null;
};

export type MutationAddAgencyAgentMutationVariables = Exact<{
  agencyId: Scalars["ID"]["input"];
  agentId: Scalars["ID"]["input"];
}>;

export type MutationAddAgencyAgentMutation = {
  __typename?: "Mutation";
  addAgencyAgent?: {
    __typename?: "Agency";
    id?: string | null;
    name?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    licenseNumber?: string | null;
    logo?: string | null;
    ownerId?: string | null;
  } | null;
};

export type MutationAddPropertyMediaMutationVariables = Exact<{
  input: AddPropertyMediaInput;
  propertyId: Scalars["ID"]["input"];
}>;

export type MutationAddPropertyMediaMutation = {
  __typename?: "Mutation";
  addPropertyMedia?: {
    __typename?: "Property";
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    availableFrom?: any | null;
    bathrooms?: number | null;
    bedrooms?: number | null;
    builtUpArea?: number | null;
    amenities?: Array<{
      __typename?: "PropertyAmenity";
      amenityId?: string | null;
      propertyId?: string | null;
    }> | null;
    buyDetail?: {
      __typename?: "BuyDetail";
      id?: string | null;
      developerName?: string | null;
      handoverDate?: any | null;
      isDeveloper?: boolean | null;
    } | null;
    documents?: Array<{
      __typename?: "PropertyDocument";
      id?: string | null;
      label?: string | null;
      type?: string | null;
      url?: string | null;
    }> | null;
  } | null;
};

export type MutationApplyAsAgentMutationVariables = Exact<{
  input: AgentApplicationInput;
}>;

export type MutationApplyAsAgentMutation = {
  __typename?: "Mutation";
  applyAsAgent?: {
    __typename?: "AgentApplication";
    id?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    applicantEmail?: string | null;
    applicantName?: string | null;
    city?: string | null;
    experience?: string | null;
    licenseNumber?: string | null;
    motivation?: string | null;
  } | null;
};

export type MutationApproveAgentApplicationMutationVariables = Exact<{
  applicationId: Scalars["ID"]["input"];
}>;

export type MutationApproveAgentApplicationMutation = {
  __typename?: "Mutation";
  approveAgentApplication?: {
    __typename?: "AgentApplication";
    id?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    applicantEmail?: string | null;
    applicantName?: string | null;
    city?: string | null;
    experience?: string | null;
    licenseNumber?: string | null;
    motivation?: string | null;
  } | null;
};

export type MutationApprovePropertyForAdminMutationVariables = Exact<{
  propertyId: Scalars["ID"]["input"];
}>;

export type MutationApprovePropertyForAdminMutation = {
  __typename?: "Mutation";
  approvePropertyForAdmin?: {
    __typename?: "Property";
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    availableFrom?: any | null;
    bathrooms?: number | null;
    bedrooms?: number | null;
    builtUpArea?: number | null;
    amenities?: Array<{
      __typename?: "PropertyAmenity";
      amenityId?: string | null;
      propertyId?: string | null;
    }> | null;
    buyDetail?: {
      __typename?: "BuyDetail";
      id?: string | null;
      developerName?: string | null;
      handoverDate?: any | null;
      isDeveloper?: boolean | null;
    } | null;
    documents?: Array<{
      __typename?: "PropertyDocument";
      id?: string | null;
      label?: string | null;
      type?: string | null;
      url?: string | null;
    }> | null;
  } | null;
};

export type MutationArchiveArticleMutationVariables = Exact<{
  articleId: Scalars["ID"]["input"];
}>;

export type MutationArchiveArticleMutation = {
  __typename?: "Mutation";
  archiveArticle?: {
    __typename?: "Article";
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    authorId?: string | null;
    authorName?: string | null;
    categoryId?: string | null;
    content?: string | null;
    category?: {
      __typename?: "ArticleCategory";
      id?: string | null;
      slug?: string | null;
      name?: string | null;
      createdAt?: any | null;
    } | null;
  } | null;
};

export type MutationArchiveCareerPostMutationVariables = Exact<{
  careerPostId: Scalars["ID"]["input"];
}>;

export type MutationArchiveCareerPostMutation = {
  __typename?: "Mutation";
  archiveCareerPost?: {
    __typename?: "CareerPost";
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    createdById?: string | null;
    description?: string | null;
    employmentType?: string | null;
    location?: string | null;
  } | null;
};

export type MutationArchiveConversationMutationVariables = Exact<{
  conversationId: Scalars["ID"]["input"];
}>;

export type MutationArchiveConversationMutation = {
  __typename?: "Mutation";
  archiveConversation?: {
    __typename?: "ConversationParticipant";
    archivedAt?: any | null;
    conversationId?: string | null;
    joinedAt?: any | null;
    lastReadAt?: any | null;
    userEmail?: string | null;
    userId?: string | null;
  } | null;
};

export type MutationArchiveMarketplaceItemMutationVariables = Exact<{
  itemId: Scalars["ID"]["input"];
}>;

export type MutationArchiveMarketplaceItemMutation = {
  __typename?: "Mutation";
  archiveMarketplaceItem?: {
    __typename?: "MarketplaceItem";
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    archivedAt?: any | null;
    category?: string | null;
    city?: string | null;
    condition?: string | null;
  } | null;
};

export type MutationArchivePropertyMutationVariables = Exact<{
  propertyId: Scalars["ID"]["input"];
}>;

export type MutationArchivePropertyMutation = {
  __typename?: "Mutation";
  archiveProperty?: {
    __typename?: "Property";
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    availableFrom?: any | null;
    bathrooms?: number | null;
    bedrooms?: number | null;
    builtUpArea?: number | null;
    amenities?: Array<{
      __typename?: "PropertyAmenity";
      amenityId?: string | null;
      propertyId?: string | null;
    }> | null;
    buyDetail?: {
      __typename?: "BuyDetail";
      id?: string | null;
      developerName?: string | null;
      handoverDate?: any | null;
      isDeveloper?: boolean | null;
    } | null;
    documents?: Array<{
      __typename?: "PropertyDocument";
      id?: string | null;
      label?: string | null;
      type?: string | null;
      url?: string | null;
    }> | null;
  } | null;
};

export type MutationArchiveStaticPageMutationVariables = Exact<{
  pageId: Scalars["ID"]["input"];
}>;

export type MutationArchiveStaticPageMutation = {
  __typename?: "Mutation";
  archiveStaticPage?: {
    __typename?: "StaticPage";
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    content?: string | null;
    createdById?: string | null;
    publishedAt?: any | null;
    summary?: string | null;
  } | null;
};

export type MutationCalculateAffordabilityMutationVariables = Exact<{
  input: AffordabilityCalculatorInput;
}>;

export type MutationCalculateAffordabilityMutation = {
  __typename?: "Mutation";
  calculateAffordability?: {
    __typename?: "AffordabilityCalculatorResult";
    disposableIncome?: number | null;
    estimatedPurchasePrice?: number | null;
    maxAffordableRepayment?: number | null;
    maxLoanAmount?: number | null;
  } | null;
};

export type MutationCalculateBondMutationVariables = Exact<{
  input: BondCalculatorInput;
}>;

export type MutationCalculateBondMutation = {
  __typename?: "Mutation";
  calculateBond?: {
    __typename?: "BondCalculatorResult";
    monthlyRepayment?: number | null;
    principal?: number | null;
    totalInterest?: number | null;
    totalRepayment?: number | null;
  } | null;
};

export type MutationCancelViewingMutationVariables = Exact<{
  viewingId: Scalars["ID"]["input"];
}>;

export type MutationCancelViewingMutation = {
  __typename?: "Mutation";
  cancelViewing?: {
    __typename?: "Viewing";
    id?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    inquiryId?: string | null;
    propertyId?: string | null;
    scheduledAt?: any | null;
    userId?: string | null;
    property?: {
      __typename?: "Property";
      id?: string | null;
      slug?: string | null;
      title?: string | null;
      status?: string | null;
    } | null;
  } | null;
};

export type MutationCompleteViewingMutationVariables = Exact<{
  viewingId: Scalars["ID"]["input"];
}>;

export type MutationCompleteViewingMutation = {
  __typename?: "Mutation";
  completeViewing?: {
    __typename?: "Viewing";
    id?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    inquiryId?: string | null;
    propertyId?: string | null;
    scheduledAt?: any | null;
    userId?: string | null;
    property?: {
      __typename?: "Property";
      id?: string | null;
      slug?: string | null;
      title?: string | null;
      status?: string | null;
    } | null;
  } | null;
};

export type MutationConfirmViewingMutationVariables = Exact<{
  viewingId: Scalars["ID"]["input"];
}>;

export type MutationConfirmViewingMutation = {
  __typename?: "Mutation";
  confirmViewing?: {
    __typename?: "Viewing";
    id?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    inquiryId?: string | null;
    propertyId?: string | null;
    scheduledAt?: any | null;
    userId?: string | null;
    property?: {
      __typename?: "Property";
      id?: string | null;
      slug?: string | null;
      title?: string | null;
      status?: string | null;
    } | null;
  } | null;
};

export type MutationCreateAgencyMutationVariables = Exact<{
  input: AgencyInput;
}>;

export type MutationCreateAgencyMutation = {
  __typename?: "Mutation";
  createAgency?: {
    __typename?: "Agency";
    id?: string | null;
    name?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    licenseNumber?: string | null;
    logo?: string | null;
    ownerId?: string | null;
  } | null;
};

export type MutationCreateAmenityMutationVariables = Exact<{
  input: AmenityInput;
}>;

export type MutationCreateAmenityMutation = {
  __typename?: "Mutation";
  createAmenity?: {
    __typename?: "Amenity";
    id?: string | null;
    name?: string | null;
    category?: string | null;
  } | null;
};

export type MutationCreateArticleMutationVariables = Exact<{
  input: ArticleInput;
}>;

export type MutationCreateArticleMutation = {
  __typename?: "Mutation";
  createArticle?: {
    __typename?: "Article";
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    authorId?: string | null;
    authorName?: string | null;
    categoryId?: string | null;
    content?: string | null;
    category?: {
      __typename?: "ArticleCategory";
      id?: string | null;
      slug?: string | null;
      name?: string | null;
      createdAt?: any | null;
    } | null;
  } | null;
};

export type MutationCreateAttorneyProfileMutationVariables = Exact<{
  input: AttorneyProfileInput;
}>;

export type MutationCreateAttorneyProfileMutation = {
  __typename?: "Mutation";
  createAttorneyProfile?: {
    __typename?: "AttorneyProfile";
    id?: string | null;
    slug?: string | null;
    name?: string | null;
    email?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    city?: string | null;
    createdById?: string | null;
    description?: string | null;
  } | null;
};

export type MutationCreateCareerPostMutationVariables = Exact<{
  input: CareerPostInput;
}>;

export type MutationCreateCareerPostMutation = {
  __typename?: "Mutation";
  createCareerPost?: {
    __typename?: "CareerPost";
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    createdById?: string | null;
    description?: string | null;
    employmentType?: string | null;
    location?: string | null;
  } | null;
};

export type MutationCreateConversationMutationVariables = Exact<{
  input: CreateConversationInput;
}>;

export type MutationCreateConversationMutation = {
  __typename?: "Mutation";
  createConversation?: {
    __typename?: "Conversation";
    id?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    contextId?: string | null;
    contextType?: string | null;
    createdById?: string | null;
    lastMessageAt?: any | null;
    subject?: string | null;
    participants?: Array<{
      __typename?: "ConversationParticipant";
      archivedAt?: any | null;
      conversationId?: string | null;
      joinedAt?: any | null;
      lastReadAt?: any | null;
    }> | null;
  } | null;
};

export type MutationCreateInquiryMutationVariables = Exact<{
  input: InquiryInput;
  propertyId: Scalars["ID"]["input"];
}>;

export type MutationCreateInquiryMutation = {
  __typename?: "Mutation";
  createInquiry?: {
    __typename?: "Inquiry";
    id?: string | null;
    name?: string | null;
    email?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    message?: string | null;
    phone?: string | null;
    propertyId?: string | null;
    source?: string | null;
    property?: {
      __typename?: "Property";
      id?: string | null;
      slug?: string | null;
      title?: string | null;
      status?: string | null;
    } | null;
  } | null;
};

export type MutationCreateMarketplaceItemMutationVariables = Exact<{
  input: MarketplaceItemInput;
}>;

export type MutationCreateMarketplaceItemMutation = {
  __typename?: "Mutation";
  createMarketplaceItem?: {
    __typename?: "MarketplaceItem";
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    archivedAt?: any | null;
    category?: string | null;
    city?: string | null;
    condition?: string | null;
  } | null;
};

export type MutationCreatePropertyMutationVariables = Exact<{
  input: PropertyInput;
}>;

export type MutationCreatePropertyMutation = {
  __typename?: "Mutation";
  createProperty?: {
    __typename?: "Property";
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    availableFrom?: any | null;
    bathrooms?: number | null;
    bedrooms?: number | null;
    builtUpArea?: number | null;
    amenities?: Array<{
      __typename?: "PropertyAmenity";
      amenityId?: string | null;
      propertyId?: string | null;
    }> | null;
    buyDetail?: {
      __typename?: "BuyDetail";
      id?: string | null;
      developerName?: string | null;
      handoverDate?: any | null;
      isDeveloper?: boolean | null;
    } | null;
    documents?: Array<{
      __typename?: "PropertyDocument";
      id?: string | null;
      label?: string | null;
      type?: string | null;
      url?: string | null;
    }> | null;
  } | null;
};

export type MutationCreatePropertyBoostMutationVariables = Exact<{
  input: ListingBoostInput;
  propertyId: Scalars["ID"]["input"];
}>;

export type MutationCreatePropertyBoostMutation = {
  __typename?: "Mutation";
  createPropertyBoost?: {
    __typename?: "ListingBoost";
    id?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    agentId?: string | null;
    expiresAt?: any | null;
    propertyId?: string | null;
    startsAt?: any | null;
    type?: string | null;
    property?: {
      __typename?: "Property";
      id?: string | null;
      slug?: string | null;
      title?: string | null;
      status?: string | null;
    } | null;
  } | null;
};

export type MutationCreatePropertyMediaUploadTargetMutationVariables = Exact<{
  input: CreatePropertyMediaUploadTargetInput;
  propertyId: Scalars["ID"]["input"];
}>;

export type MutationCreatePropertyMediaUploadTargetMutation = {
  __typename?: "Mutation";
  createPropertyMediaUploadTarget?: {
    __typename?: "PropertyMediaUploadTarget";
    contentType?: string | null;
    expiresInSeconds?: number | null;
    key?: string | null;
    publicUrl?: string | null;
    uploadUrl?: string | null;
  } | null;
};

export type MutationCreateReportMutationVariables = Exact<{
  input: ReportInput;
  propertyId: Scalars["ID"]["input"];
}>;

export type MutationCreateReportMutation = {
  __typename?: "Mutation";
  createReport?: {
    __typename?: "Report";
    id?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    description?: string | null;
    propertyId?: string | null;
    reason?: string | null;
    userId?: string | null;
    property?: {
      __typename?: "Property";
      id?: string | null;
      slug?: string | null;
      title?: string | null;
      status?: string | null;
    } | null;
  } | null;
};

export type MutationCreateReviewMutationVariables = Exact<{
  input: ReviewInput;
  propertyId: Scalars["ID"]["input"];
}>;

export type MutationCreateReviewMutation = {
  __typename?: "Mutation";
  createReview?: {
    __typename?: "Review";
    id?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    comment?: string | null;
    propertyId?: string | null;
    rating?: number | null;
    userId?: string | null;
    property?: {
      __typename?: "Property";
      id?: string | null;
      slug?: string | null;
      title?: string | null;
      status?: string | null;
    } | null;
  } | null;
};

export type MutationCreateSavedSearchMutationVariables = Exact<{
  input: SavedSearchInput;
}>;

export type MutationCreateSavedSearchMutation = {
  __typename?: "Mutation";
  createSavedSearch?: {
    __typename?: "SavedSearch";
    id?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    alertEnabled?: boolean | null;
    filtersJson?: string | null;
    lastNotifiedAt?: any | null;
    userId?: string | null;
  } | null;
};

export type MutationCreateServiceListingMutationVariables = Exact<{
  input: ServiceListingInput;
}>;

export type MutationCreateServiceListingMutation = {
  __typename?: "Mutation";
  createServiceListing?: {
    __typename?: "ServiceListing";
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    category?: string | null;
    city?: string | null;
    currency?: string | null;
    description?: string | null;
    provider?: {
      __typename?: "ServiceProvider";
      id?: string | null;
      slug?: string | null;
      email?: string | null;
      status?: string | null;
    } | null;
  } | null;
};

export type MutationCreateServiceProviderMutationVariables = Exact<{
  input: ServiceProviderInput;
}>;

export type MutationCreateServiceProviderMutation = {
  __typename?: "Mutation";
  createServiceProvider?: {
    __typename?: "ServiceProvider";
    id?: string | null;
    slug?: string | null;
    email?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    businessName?: string | null;
    city?: string | null;
    description?: string | null;
    isVerified?: boolean | null;
  } | null;
};

export type MutationCreateStaticPageMutationVariables = Exact<{
  input: StaticPageInput;
}>;

export type MutationCreateStaticPageMutation = {
  __typename?: "Mutation";
  createStaticPage?: {
    __typename?: "StaticPage";
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    content?: string | null;
    createdById?: string | null;
    publishedAt?: any | null;
    summary?: string | null;
  } | null;
};

export type MutationCreateSubscriptionPlanMutationVariables = Exact<{
  input: SubscriptionPlanInput;
}>;

export type MutationCreateSubscriptionPlanMutation = {
  __typename?: "Mutation";
  createSubscriptionPlan?: {
    __typename?: "SubscriptionPlan";
    id?: string | null;
    name?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    boostCredits?: number | null;
    durationDays?: number | null;
    featuresJson?: string | null;
    listingLimit?: number | null;
    price?: number | null;
  } | null;
};

export type MutationDeleteAdminMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type MutationDeleteAdminMutation = {
  __typename?: "Mutation";
  deleteAdmin?: {
    __typename?: "Admin";
    id?: string | null;
    userId?: string | null;
    user?: {
      __typename?: "User";
      id?: string | null;
      name?: string | null;
      email?: string | null;
      role?: string | null;
    } | null;
  } | null;
};

export type MutationDeleteAmenityMutationVariables = Exact<{
  amenityId: Scalars["ID"]["input"];
}>;

export type MutationDeleteAmenityMutation = {
  __typename?: "Mutation";
  deleteAmenity?: {
    __typename?: "Amenity";
    id?: string | null;
    name?: string | null;
    category?: string | null;
  } | null;
};

export type MutationDeleteArticleMutationVariables = Exact<{
  articleId: Scalars["ID"]["input"];
}>;

export type MutationDeleteArticleMutation = {
  __typename?: "Mutation";
  deleteArticle?: {
    __typename?: "Article";
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    authorId?: string | null;
    authorName?: string | null;
    categoryId?: string | null;
    content?: string | null;
    category?: {
      __typename?: "ArticleCategory";
      id?: string | null;
      slug?: string | null;
      name?: string | null;
      createdAt?: any | null;
    } | null;
  } | null;
};

export type MutationDeleteAttorneyProfileMutationVariables = Exact<{
  attorneyId: Scalars["ID"]["input"];
}>;

export type MutationDeleteAttorneyProfileMutation = {
  __typename?: "Mutation";
  deleteAttorneyProfile?: {
    __typename?: "AttorneyProfile";
    id?: string | null;
    slug?: string | null;
    name?: string | null;
    email?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    city?: string | null;
    createdById?: string | null;
    description?: string | null;
  } | null;
};

export type MutationDeleteMarketplaceItemMutationVariables = Exact<{
  itemId: Scalars["ID"]["input"];
}>;

export type MutationDeleteMarketplaceItemMutation = {
  __typename?: "Mutation";
  deleteMarketplaceItem?: {
    __typename?: "MarketplaceItem";
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    archivedAt?: any | null;
    category?: string | null;
    city?: string | null;
    condition?: string | null;
  } | null;
};

export type MutationDeleteNotificationMutationVariables = Exact<{
  notificationId: Scalars["ID"]["input"];
}>;

export type MutationDeleteNotificationMutation = {
  __typename?: "Mutation";
  deleteNotification?: boolean | null;
};

export type MutationDeletePropertyMutationVariables = Exact<{
  propertyId: Scalars["ID"]["input"];
}>;

export type MutationDeletePropertyMutation = {
  __typename?: "Mutation";
  deleteProperty?: {
    __typename?: "Property";
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    availableFrom?: any | null;
    bathrooms?: number | null;
    bedrooms?: number | null;
    builtUpArea?: number | null;
    amenities?: Array<{
      __typename?: "PropertyAmenity";
      amenityId?: string | null;
      propertyId?: string | null;
    }> | null;
    buyDetail?: {
      __typename?: "BuyDetail";
      id?: string | null;
      developerName?: string | null;
      handoverDate?: any | null;
      isDeveloper?: boolean | null;
    } | null;
    documents?: Array<{
      __typename?: "PropertyDocument";
      id?: string | null;
      label?: string | null;
      type?: string | null;
      url?: string | null;
    }> | null;
  } | null;
};

export type MutationDeletePropertyBoostMutationVariables = Exact<{
  boostId: Scalars["ID"]["input"];
}>;

export type MutationDeletePropertyBoostMutation = {
  __typename?: "Mutation";
  deletePropertyBoost?: boolean | null;
};

export type MutationDeletePropertyMediaMutationVariables = Exact<{
  mediaId: Scalars["ID"]["input"];
  propertyId: Scalars["ID"]["input"];
}>;

export type MutationDeletePropertyMediaMutation = {
  __typename?: "Mutation";
  deletePropertyMedia?: {
    __typename?: "Property";
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    availableFrom?: any | null;
    bathrooms?: number | null;
    bedrooms?: number | null;
    builtUpArea?: number | null;
    amenities?: Array<{
      __typename?: "PropertyAmenity";
      amenityId?: string | null;
      propertyId?: string | null;
    }> | null;
    buyDetail?: {
      __typename?: "BuyDetail";
      id?: string | null;
      developerName?: string | null;
      handoverDate?: any | null;
      isDeveloper?: boolean | null;
    } | null;
    documents?: Array<{
      __typename?: "PropertyDocument";
      id?: string | null;
      label?: string | null;
      type?: string | null;
      url?: string | null;
    }> | null;
  } | null;
};

export type MutationDeleteRenterMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type MutationDeleteRenterMutation = {
  __typename?: "Mutation";
  deleteRenter?: {
    __typename?: "Renter";
    id?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    userId?: string | null;
    user?: {
      __typename?: "User";
      id?: string | null;
      name?: string | null;
      email?: string | null;
      role?: string | null;
    } | null;
  } | null;
};

export type MutationDeleteReviewMutationVariables = Exact<{
  reviewId: Scalars["ID"]["input"];
}>;

export type MutationDeleteReviewMutation = {
  __typename?: "Mutation";
  deleteReview?: {
    __typename?: "Review";
    id?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    comment?: string | null;
    propertyId?: string | null;
    rating?: number | null;
    userId?: string | null;
    property?: {
      __typename?: "Property";
      id?: string | null;
      slug?: string | null;
      title?: string | null;
      status?: string | null;
    } | null;
  } | null;
};

export type MutationDeleteRoommateProfileMutationVariables = Exact<{
  profileId: Scalars["ID"]["input"];
}>;

export type MutationDeleteRoommateProfileMutation = {
  __typename?: "Mutation";
  deleteRoommateProfile?: {
    __typename?: "RoommateProfile";
    id?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    age?: number | null;
    area?: string | null;
    bio?: string | null;
    budgetMax?: number | null;
    budgetMin?: number | null;
    city?: string | null;
  } | null;
};

export type MutationDeleteSavedSearchMutationVariables = Exact<{
  savedSearchId: Scalars["ID"]["input"];
}>;

export type MutationDeleteSavedSearchMutation = {
  __typename?: "Mutation";
  deleteSavedSearch?: boolean | null;
};

export type MutationDeleteServiceListingMutationVariables = Exact<{
  listingId: Scalars["ID"]["input"];
}>;

export type MutationDeleteServiceListingMutation = {
  __typename?: "Mutation";
  deleteServiceListing?: {
    __typename?: "ServiceListing";
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    category?: string | null;
    city?: string | null;
    currency?: string | null;
    description?: string | null;
    provider?: {
      __typename?: "ServiceProvider";
      id?: string | null;
      slug?: string | null;
      email?: string | null;
      status?: string | null;
    } | null;
  } | null;
};

export type MutationDeleteSubscriptionPlanMutationVariables = Exact<{
  planId: Scalars["ID"]["input"];
}>;

export type MutationDeleteSubscriptionPlanMutation = {
  __typename?: "Mutation";
  deleteSubscriptionPlan?: {
    __typename?: "SubscriptionPlan";
    id?: string | null;
    name?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    boostCredits?: number | null;
    durationDays?: number | null;
    featuresJson?: string | null;
    listingLimit?: number | null;
    price?: number | null;
  } | null;
};

export type MutationDeleteUserMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type MutationDeleteUserMutation = {
  __typename?: "Mutation";
  deleteUser?: {
    __typename?: "User";
    id?: string | null;
    name?: string | null;
    email?: string | null;
    role?: string | null;
    emailVerified?: boolean | null;
    image?: string | null;
    admin?: {
      __typename?: "Admin";
      id?: string | null;
      userId?: string | null;
    } | null;
    renter?: {
      __typename?: "Renter";
      id?: string | null;
      createdAt?: any | null;
      updatedAt?: any | null;
      userId?: string | null;
    } | null;
  } | null;
};

export type MutationDuplicatePropertyMutationVariables = Exact<{
  propertyId: Scalars["ID"]["input"];
}>;

export type MutationDuplicatePropertyMutation = {
  __typename?: "Mutation";
  duplicateProperty?: {
    __typename?: "Property";
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    availableFrom?: any | null;
    bathrooms?: number | null;
    bedrooms?: number | null;
    builtUpArea?: number | null;
    amenities?: Array<{
      __typename?: "PropertyAmenity";
      amenityId?: string | null;
      propertyId?: string | null;
    }> | null;
    buyDetail?: {
      __typename?: "BuyDetail";
      id?: string | null;
      developerName?: string | null;
      handoverDate?: any | null;
      isDeveloper?: boolean | null;
    } | null;
    documents?: Array<{
      __typename?: "PropertyDocument";
      id?: string | null;
      label?: string | null;
      type?: string | null;
      url?: string | null;
    }> | null;
  } | null;
};

export type MutationMarkAllNotificationsReadMutationVariables = Exact<{
  [key: string]: never;
}>;

export type MutationMarkAllNotificationsReadMutation = {
  __typename?: "Mutation";
  markAllNotificationsRead?: boolean | null;
};

export type MutationMarkConversationReadMutationVariables = Exact<{
  conversationId: Scalars["ID"]["input"];
}>;

export type MutationMarkConversationReadMutation = {
  __typename?: "Mutation";
  markConversationRead?: {
    __typename?: "ConversationParticipant";
    archivedAt?: any | null;
    conversationId?: string | null;
    joinedAt?: any | null;
    lastReadAt?: any | null;
    userEmail?: string | null;
    userId?: string | null;
  } | null;
};

export type MutationMarkNotificationReadMutationVariables = Exact<{
  notificationId: Scalars["ID"]["input"];
}>;

export type MutationMarkNotificationReadMutation = {
  __typename?: "Mutation";
  markNotificationRead?: {
    __typename?: "Notification";
    id?: string | null;
    title?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    body?: string | null;
    isRead?: boolean | null;
    metadataJson?: string | null;
    type?: string | null;
    userId?: string | null;
  } | null;
};

export type MutationPublishArticleMutationVariables = Exact<{
  articleId: Scalars["ID"]["input"];
}>;

export type MutationPublishArticleMutation = {
  __typename?: "Mutation";
  publishArticle?: {
    __typename?: "Article";
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    authorId?: string | null;
    authorName?: string | null;
    categoryId?: string | null;
    content?: string | null;
    category?: {
      __typename?: "ArticleCategory";
      id?: string | null;
      slug?: string | null;
      name?: string | null;
      createdAt?: any | null;
    } | null;
  } | null;
};

export type MutationPublishMarketplaceItemMutationVariables = Exact<{
  itemId: Scalars["ID"]["input"];
}>;

export type MutationPublishMarketplaceItemMutation = {
  __typename?: "Mutation";
  publishMarketplaceItem?: {
    __typename?: "MarketplaceItem";
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    archivedAt?: any | null;
    category?: string | null;
    city?: string | null;
    condition?: string | null;
  } | null;
};

export type MutationPublishPropertyMutationVariables = Exact<{
  propertyId: Scalars["ID"]["input"];
}>;

export type MutationPublishPropertyMutation = {
  __typename?: "Mutation";
  publishProperty?: {
    __typename?: "Property";
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    availableFrom?: any | null;
    bathrooms?: number | null;
    bedrooms?: number | null;
    builtUpArea?: number | null;
    amenities?: Array<{
      __typename?: "PropertyAmenity";
      amenityId?: string | null;
      propertyId?: string | null;
    }> | null;
    buyDetail?: {
      __typename?: "BuyDetail";
      id?: string | null;
      developerName?: string | null;
      handoverDate?: any | null;
      isDeveloper?: boolean | null;
    } | null;
    documents?: Array<{
      __typename?: "PropertyDocument";
      id?: string | null;
      label?: string | null;
      type?: string | null;
      url?: string | null;
    }> | null;
  } | null;
};

export type MutationPublishStaticPageMutationVariables = Exact<{
  pageId: Scalars["ID"]["input"];
}>;

export type MutationPublishStaticPageMutation = {
  __typename?: "Mutation";
  publishStaticPage?: {
    __typename?: "StaticPage";
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    content?: string | null;
    createdById?: string | null;
    publishedAt?: any | null;
    summary?: string | null;
  } | null;
};

export type MutationRejectAgentApplicationMutationVariables = Exact<{
  applicationId: Scalars["ID"]["input"];
  rejectionReason?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type MutationRejectAgentApplicationMutation = {
  __typename?: "Mutation";
  rejectAgentApplication?: {
    __typename?: "AgentApplication";
    id?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    applicantEmail?: string | null;
    applicantName?: string | null;
    city?: string | null;
    experience?: string | null;
    licenseNumber?: string | null;
    motivation?: string | null;
  } | null;
};

export type MutationRejectPropertyForAdminMutationVariables = Exact<{
  propertyId: Scalars["ID"]["input"];
}>;

export type MutationRejectPropertyForAdminMutation = {
  __typename?: "Mutation";
  rejectPropertyForAdmin?: {
    __typename?: "Property";
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    availableFrom?: any | null;
    bathrooms?: number | null;
    bedrooms?: number | null;
    builtUpArea?: number | null;
    amenities?: Array<{
      __typename?: "PropertyAmenity";
      amenityId?: string | null;
      propertyId?: string | null;
    }> | null;
    buyDetail?: {
      __typename?: "BuyDetail";
      id?: string | null;
      developerName?: string | null;
      handoverDate?: any | null;
      isDeveloper?: boolean | null;
    } | null;
    documents?: Array<{
      __typename?: "PropertyDocument";
      id?: string | null;
      label?: string | null;
      type?: string | null;
      url?: string | null;
    }> | null;
  } | null;
};

export type MutationRemoveAgencyAgentMutationVariables = Exact<{
  agencyId: Scalars["ID"]["input"];
  agentId: Scalars["ID"]["input"];
}>;

export type MutationRemoveAgencyAgentMutation = {
  __typename?: "Mutation";
  removeAgencyAgent?: {
    __typename?: "Agency";
    id?: string | null;
    name?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    licenseNumber?: string | null;
    logo?: string | null;
    ownerId?: string | null;
  } | null;
};

export type MutationReorderPropertyMediaMutationVariables = Exact<{
  input: PropertyMediaReorderInput;
  propertyId: Scalars["ID"]["input"];
}>;

export type MutationReorderPropertyMediaMutation = {
  __typename?: "Mutation";
  reorderPropertyMedia?: Array<{
    __typename?: "PropertyMedia";
    id?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    isPrimary?: boolean | null;
    order?: number | null;
    type?: string | null;
    url?: string | null;
  }> | null;
};

export type MutationRequestAgencyAdvertisingMutationVariables = Exact<{
  input: AgencyAdvertisingRequestInput;
}>;

export type MutationRequestAgencyAdvertisingMutation = {
  __typename?: "Mutation";
  requestAgencyAdvertising?: {
    __typename?: "AgencyAdvertisingRequest";
    id?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    agencyName?: string | null;
    budget?: string | null;
    contactEmail?: string | null;
    contactPhone?: string | null;
    message?: string | null;
    rejectionReason?: string | null;
  } | null;
};

export type MutationRequestServiceMutationVariables = Exact<{
  input: ServiceRequestInput;
  listingId: Scalars["ID"]["input"];
}>;

export type MutationRequestServiceMutation = {
  __typename?: "Mutation";
  requestService?: {
    __typename?: "ServiceRequest";
    id?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    listingId?: string | null;
    message?: string | null;
    preferredDate?: any | null;
    requesterId?: string | null;
    requesterName?: string | null;
    listing?: {
      __typename?: "ServiceListing";
      id?: string | null;
      slug?: string | null;
      title?: string | null;
      status?: string | null;
    } | null;
  } | null;
};

export type MutationResolveReportMutationVariables = Exact<{
  reportId: Scalars["ID"]["input"];
}>;

export type MutationResolveReportMutation = {
  __typename?: "Mutation";
  resolveReport?: {
    __typename?: "Report";
    id?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    description?: string | null;
    propertyId?: string | null;
    reason?: string | null;
    userId?: string | null;
    property?: {
      __typename?: "Property";
      id?: string | null;
      slug?: string | null;
      title?: string | null;
      status?: string | null;
    } | null;
  } | null;
};

export type MutationSaveMarketplaceItemMutationVariables = Exact<{
  itemId: Scalars["ID"]["input"];
}>;

export type MutationSaveMarketplaceItemMutation = {
  __typename?: "Mutation";
  saveMarketplaceItem?: {
    __typename?: "MarketplaceSavedItem";
    itemId?: string | null;
    savedAt?: any | null;
    userId?: string | null;
    item?: {
      __typename?: "MarketplaceItem";
      id?: string | null;
      slug?: string | null;
      title?: string | null;
      status?: string | null;
    } | null;
  } | null;
};

export type MutationSavePropertyMutationVariables = Exact<{
  propertyId: Scalars["ID"]["input"];
}>;

export type MutationSavePropertyMutation = {
  __typename?: "Mutation";
  saveProperty?: {
    __typename?: "SavedProperty";
    propertyId?: string | null;
    savedAt?: any | null;
    userId?: string | null;
    property?: {
      __typename?: "Property";
      id?: string | null;
      slug?: string | null;
      title?: string | null;
      status?: string | null;
    } | null;
  } | null;
};

export type MutationSavePropertyBuyDetailMutationVariables = Exact<{
  input: BuyDetailInput;
  propertyId: Scalars["ID"]["input"];
}>;

export type MutationSavePropertyBuyDetailMutation = {
  __typename?: "Mutation";
  savePropertyBuyDetail?: {
    __typename?: "BuyDetail";
    id?: string | null;
    developerName?: string | null;
    handoverDate?: any | null;
    isDeveloper?: boolean | null;
    ownerType?: string | null;
    ownership?: string | null;
    projectName?: string | null;
    paymentPlan?: {
      __typename?: "PaymentPlan";
      id?: string | null;
      createdAt?: any | null;
      updatedAt?: any | null;
    } | null;
  } | null;
};

export type MutationSavePropertyBuyPaymentPlanMutationVariables = Exact<{
  input: PaymentPlanInput;
  propertyId: Scalars["ID"]["input"];
}>;

export type MutationSavePropertyBuyPaymentPlanMutation = {
  __typename?: "Mutation";
  savePropertyBuyPaymentPlan?: {
    __typename?: "PaymentPlan";
    id?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    installments?: Array<{
      __typename?: "Installment";
      id?: string | null;
      amount?: number | null;
      dueDate?: any | null;
      label?: string | null;
    }> | null;
  } | null;
};

export type MutationSavePropertyRentDetailMutationVariables = Exact<{
  input: RentDetailInput;
  propertyId: Scalars["ID"]["input"];
}>;

export type MutationSavePropertyRentDetailMutation = {
  __typename?: "Mutation";
  savePropertyRentDetail?: {
    __typename?: "RentDetail";
    id?: string | null;
    cheques?: number | null;
    chillerIncluded?: boolean | null;
    depositAmount?: number | null;
    maintenanceBy?: string | null;
    minLeaseTerm?: number | null;
    petsAllowed?: boolean | null;
  } | null;
};

export type MutationSavePropertySellDetailMutationVariables = Exact<{
  input: SellDetailInput;
  propertyId: Scalars["ID"]["input"];
}>;

export type MutationSavePropertySellDetailMutation = {
  __typename?: "Mutation";
  savePropertySellDetail?: {
    __typename?: "SellDetail";
    id?: string | null;
    commissionPaidBy?: string | null;
    inspectionStatus?: string | null;
    isOffMarket?: boolean | null;
    propertyId?: string | null;
    sellerType?: string | null;
    priceHistory?: Array<{
      __typename?: "PriceHistory";
      id?: string | null;
      changedAt?: any | null;
      price?: number | null;
      propertyId?: string | null;
    }> | null;
  } | null;
};

export type MutationSaveRoommateProfileMutationVariables = Exact<{
  profileId: Scalars["ID"]["input"];
}>;

export type MutationSaveRoommateProfileMutation = {
  __typename?: "Mutation";
  saveRoommateProfile?: {
    __typename?: "RoommateSavedProfile";
    profileId?: string | null;
    savedAt?: any | null;
    userId?: string | null;
    profile?: {
      __typename?: "RoommateProfile";
      id?: string | null;
      status?: string | null;
      createdAt?: any | null;
      updatedAt?: any | null;
    } | null;
  } | null;
};

export type MutationScheduleViewingMutationVariables = Exact<{
  input: ScheduleViewingInput;
  inquiryId: Scalars["ID"]["input"];
}>;

export type MutationScheduleViewingMutation = {
  __typename?: "Mutation";
  scheduleViewing?: {
    __typename?: "Viewing";
    id?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    inquiryId?: string | null;
    propertyId?: string | null;
    scheduledAt?: any | null;
    userId?: string | null;
    property?: {
      __typename?: "Property";
      id?: string | null;
      slug?: string | null;
      title?: string | null;
      status?: string | null;
    } | null;
  } | null;
};

export type MutationSendMessageMutationVariables = Exact<{
  conversationId: Scalars["ID"]["input"];
  input: SendMessageInput;
}>;

export type MutationSendMessageMutation = {
  __typename?: "Mutation";
  sendMessage?: {
    __typename?: "ConversationMessage";
    id?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    body?: string | null;
    conversationId?: string | null;
    senderId?: string | null;
    type?: string | null;
  } | null;
};

export type MutationSetPrimaryPropertyMediaMutationVariables = Exact<{
  mediaId: Scalars["ID"]["input"];
  propertyId: Scalars["ID"]["input"];
}>;

export type MutationSetPrimaryPropertyMediaMutation = {
  __typename?: "Mutation";
  setPrimaryPropertyMedia?: {
    __typename?: "PropertyMedia";
    id?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    isPrimary?: boolean | null;
    order?: number | null;
    type?: string | null;
    url?: string | null;
  } | null;
};

export type MutationSubmitContactMessageMutationVariables = Exact<{
  input: ContactMessageInput;
}>;

export type MutationSubmitContactMessageMutation = {
  __typename?: "Mutation";
  submitContactMessage?: {
    __typename?: "ContactMessage";
    id?: string | null;
    name?: string | null;
    email?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    message?: string | null;
    phone?: string | null;
    subject?: string | null;
    userId?: string | null;
  } | null;
};

export type MutationSubmitJobApplicationMutationVariables = Exact<{
  careerPostId: Scalars["ID"]["input"];
  input: JobApplicationInput;
}>;

export type MutationSubmitJobApplicationMutation = {
  __typename?: "Mutation";
  submitJobApplication?: {
    __typename?: "JobApplication";
    id?: string | null;
    email?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    careerPostId?: string | null;
    coverLetter?: string | null;
    fullName?: string | null;
    phone?: string | null;
    resumeUrl?: string | null;
    userId?: string | null;
  } | null;
};

export type MutationSubscribeToPlanMutationVariables = Exact<{
  input: SubscribeToPlanInput;
}>;

export type MutationSubscribeToPlanMutation = {
  __typename?: "Mutation";
  subscribeToPlan?: {
    __typename?: "AgentSubscription";
    id?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    agentId?: string | null;
    expiresAt?: any | null;
    isActive?: boolean | null;
    planId?: string | null;
    startsAt?: any | null;
    plan?: {
      __typename?: "SubscriptionPlan";
      id?: string | null;
      name?: string | null;
      createdAt?: any | null;
      updatedAt?: any | null;
    } | null;
  } | null;
};

export type MutationToggleSavedSearchAlertMutationVariables = Exact<{
  savedSearchId: Scalars["ID"]["input"];
}>;

export type MutationToggleSavedSearchAlertMutation = {
  __typename?: "Mutation";
  toggleSavedSearchAlert?: {
    __typename?: "SavedSearch";
    id?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    alertEnabled?: boolean | null;
    filtersJson?: string | null;
    lastNotifiedAt?: any | null;
    userId?: string | null;
  } | null;
};

export type MutationTrackPropertyViewMutationVariables = Exact<{
  propertyId: Scalars["ID"]["input"];
}>;

export type MutationTrackPropertyViewMutation = {
  __typename?: "Mutation";
  trackPropertyView?: {
    __typename?: "Property";
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    availableFrom?: any | null;
    bathrooms?: number | null;
    bedrooms?: number | null;
    builtUpArea?: number | null;
    amenities?: Array<{
      __typename?: "PropertyAmenity";
      amenityId?: string | null;
      propertyId?: string | null;
    }> | null;
    buyDetail?: {
      __typename?: "BuyDetail";
      id?: string | null;
      developerName?: string | null;
      handoverDate?: any | null;
      isDeveloper?: boolean | null;
    } | null;
    documents?: Array<{
      __typename?: "PropertyDocument";
      id?: string | null;
      label?: string | null;
      type?: string | null;
      url?: string | null;
    }> | null;
  } | null;
};

export type MutationUnsaveMarketplaceItemMutationVariables = Exact<{
  itemId: Scalars["ID"]["input"];
}>;

export type MutationUnsaveMarketplaceItemMutation = {
  __typename?: "Mutation";
  unsaveMarketplaceItem?: boolean | null;
};

export type MutationUnsavePropertyMutationVariables = Exact<{
  propertyId: Scalars["ID"]["input"];
}>;

export type MutationUnsavePropertyMutation = {
  __typename?: "Mutation";
  unsaveProperty?: boolean | null;
};

export type MutationUnsaveRoommateProfileMutationVariables = Exact<{
  profileId: Scalars["ID"]["input"];
}>;

export type MutationUnsaveRoommateProfileMutation = {
  __typename?: "Mutation";
  unsaveRoommateProfile?: boolean | null;
};

export type MutationUpdateAdminMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
  input: AdminUpdateInput;
}>;

export type MutationUpdateAdminMutation = {
  __typename?: "Mutation";
  updateAdmin?: {
    __typename?: "Admin";
    id?: string | null;
    userId?: string | null;
    user?: {
      __typename?: "User";
      id?: string | null;
      name?: string | null;
      email?: string | null;
      role?: string | null;
    } | null;
  } | null;
};

export type MutationUpdateAgencyMutationVariables = Exact<{
  agencyId: Scalars["ID"]["input"];
  input: AgencyUpdateInput;
}>;

export type MutationUpdateAgencyMutation = {
  __typename?: "Mutation";
  updateAgency?: {
    __typename?: "Agency";
    id?: string | null;
    name?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    licenseNumber?: string | null;
    logo?: string | null;
    ownerId?: string | null;
  } | null;
};

export type MutationUpdateAgencyAdvertisingRequestStatusMutationVariables =
  Exact<{
    input: AgencyAdvertisingRequestStatusInput;
    requestId: Scalars["ID"]["input"];
  }>;

export type MutationUpdateAgencyAdvertisingRequestStatusMutation = {
  __typename?: "Mutation";
  updateAgencyAdvertisingRequestStatus?: {
    __typename?: "AgencyAdvertisingRequest";
    id?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    agencyName?: string | null;
    budget?: string | null;
    contactEmail?: string | null;
    contactPhone?: string | null;
    message?: string | null;
    rejectionReason?: string | null;
  } | null;
};

export type MutationUpdateAmenityMutationVariables = Exact<{
  amenityId: Scalars["ID"]["input"];
  input: AmenityUpdateInput;
}>;

export type MutationUpdateAmenityMutation = {
  __typename?: "Mutation";
  updateAmenity?: {
    __typename?: "Amenity";
    id?: string | null;
    name?: string | null;
    category?: string | null;
  } | null;
};

export type MutationUpdateArticleMutationVariables = Exact<{
  articleId: Scalars["ID"]["input"];
  input: ArticleUpdateInput;
}>;

export type MutationUpdateArticleMutation = {
  __typename?: "Mutation";
  updateArticle?: {
    __typename?: "Article";
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    authorId?: string | null;
    authorName?: string | null;
    categoryId?: string | null;
    content?: string | null;
    category?: {
      __typename?: "ArticleCategory";
      id?: string | null;
      slug?: string | null;
      name?: string | null;
      createdAt?: any | null;
    } | null;
  } | null;
};

export type MutationUpdateAttorneyProfileMutationVariables = Exact<{
  attorneyId: Scalars["ID"]["input"];
  input: AttorneyProfileUpdateInput;
}>;

export type MutationUpdateAttorneyProfileMutation = {
  __typename?: "Mutation";
  updateAttorneyProfile?: {
    __typename?: "AttorneyProfile";
    id?: string | null;
    slug?: string | null;
    name?: string | null;
    email?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    city?: string | null;
    createdById?: string | null;
    description?: string | null;
  } | null;
};

export type MutationUpdateCareerPostMutationVariables = Exact<{
  careerPostId: Scalars["ID"]["input"];
  input: CareerPostUpdateInput;
}>;

export type MutationUpdateCareerPostMutation = {
  __typename?: "Mutation";
  updateCareerPost?: {
    __typename?: "CareerPost";
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    createdById?: string | null;
    description?: string | null;
    employmentType?: string | null;
    location?: string | null;
  } | null;
};

export type MutationUpdateInquiryStatusMutationVariables = Exact<{
  input: InquiryStatusUpdateInput;
  inquiryId: Scalars["ID"]["input"];
}>;

export type MutationUpdateInquiryStatusMutation = {
  __typename?: "Mutation";
  updateInquiryStatus?: {
    __typename?: "Inquiry";
    id?: string | null;
    name?: string | null;
    email?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    message?: string | null;
    phone?: string | null;
    propertyId?: string | null;
    source?: string | null;
    property?: {
      __typename?: "Property";
      id?: string | null;
      slug?: string | null;
      title?: string | null;
      status?: string | null;
    } | null;
  } | null;
};

export type MutationUpdateMarketplaceItemMutationVariables = Exact<{
  input: MarketplaceItemUpdateInput;
  itemId: Scalars["ID"]["input"];
}>;

export type MutationUpdateMarketplaceItemMutation = {
  __typename?: "Mutation";
  updateMarketplaceItem?: {
    __typename?: "MarketplaceItem";
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    archivedAt?: any | null;
    category?: string | null;
    city?: string | null;
    condition?: string | null;
  } | null;
};

export type MutationUpdatePropertyMutationVariables = Exact<{
  input: PropertyUpdateInput;
  propertyId: Scalars["ID"]["input"];
}>;

export type MutationUpdatePropertyMutation = {
  __typename?: "Mutation";
  updateProperty?: {
    __typename?: "Property";
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    availableFrom?: any | null;
    bathrooms?: number | null;
    bedrooms?: number | null;
    builtUpArea?: number | null;
    amenities?: Array<{
      __typename?: "PropertyAmenity";
      amenityId?: string | null;
      propertyId?: string | null;
    }> | null;
    buyDetail?: {
      __typename?: "BuyDetail";
      id?: string | null;
      developerName?: string | null;
      handoverDate?: any | null;
      isDeveloper?: boolean | null;
    } | null;
    documents?: Array<{
      __typename?: "PropertyDocument";
      id?: string | null;
      label?: string | null;
      type?: string | null;
      url?: string | null;
    }> | null;
  } | null;
};

export type MutationUpdateRenterMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
  input: RenterUpdateInput;
}>;

export type MutationUpdateRenterMutation = {
  __typename?: "Mutation";
  updateRenter?: {
    __typename?: "Renter";
    id?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    userId?: string | null;
    user?: {
      __typename?: "User";
      id?: string | null;
      name?: string | null;
      email?: string | null;
      role?: string | null;
    } | null;
  } | null;
};

export type MutationUpdateServiceListingMutationVariables = Exact<{
  input: ServiceListingUpdateInput;
  listingId: Scalars["ID"]["input"];
}>;

export type MutationUpdateServiceListingMutation = {
  __typename?: "Mutation";
  updateServiceListing?: {
    __typename?: "ServiceListing";
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    category?: string | null;
    city?: string | null;
    currency?: string | null;
    description?: string | null;
    provider?: {
      __typename?: "ServiceProvider";
      id?: string | null;
      slug?: string | null;
      email?: string | null;
      status?: string | null;
    } | null;
  } | null;
};

export type MutationUpdateServiceProviderMutationVariables = Exact<{
  input: ServiceProviderUpdateInput;
  providerId: Scalars["ID"]["input"];
}>;

export type MutationUpdateServiceProviderMutation = {
  __typename?: "Mutation";
  updateServiceProvider?: {
    __typename?: "ServiceProvider";
    id?: string | null;
    slug?: string | null;
    email?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    businessName?: string | null;
    city?: string | null;
    description?: string | null;
    isVerified?: boolean | null;
  } | null;
};

export type MutationUpdateServiceRequestStatusMutationVariables = Exact<{
  input: ServiceRequestStatusInput;
  requestId: Scalars["ID"]["input"];
}>;

export type MutationUpdateServiceRequestStatusMutation = {
  __typename?: "Mutation";
  updateServiceRequestStatus?: {
    __typename?: "ServiceRequest";
    id?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    listingId?: string | null;
    message?: string | null;
    preferredDate?: any | null;
    requesterId?: string | null;
    requesterName?: string | null;
    listing?: {
      __typename?: "ServiceListing";
      id?: string | null;
      slug?: string | null;
      title?: string | null;
      status?: string | null;
    } | null;
  } | null;
};

export type MutationUpdateStaticPageMutationVariables = Exact<{
  input: StaticPageUpdateInput;
  pageId: Scalars["ID"]["input"];
}>;

export type MutationUpdateStaticPageMutation = {
  __typename?: "Mutation";
  updateStaticPage?: {
    __typename?: "StaticPage";
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    content?: string | null;
    createdById?: string | null;
    publishedAt?: any | null;
    summary?: string | null;
  } | null;
};

export type MutationUpdateSubscriptionPlanMutationVariables = Exact<{
  input: SubscriptionPlanUpdateInput;
  planId: Scalars["ID"]["input"];
}>;

export type MutationUpdateSubscriptionPlanMutation = {
  __typename?: "Mutation";
  updateSubscriptionPlan?: {
    __typename?: "SubscriptionPlan";
    id?: string | null;
    name?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    boostCredits?: number | null;
    durationDays?: number | null;
    featuresJson?: string | null;
    listingLimit?: number | null;
    price?: number | null;
  } | null;
};

export type MutationUpdateUserMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
  input: UserUpdateInput;
}>;

export type MutationUpdateUserMutation = {
  __typename?: "Mutation";
  updateUser?: {
    __typename?: "User";
    id?: string | null;
    name?: string | null;
    email?: string | null;
    role?: string | null;
    emailVerified?: boolean | null;
    image?: string | null;
    admin?: {
      __typename?: "Admin";
      id?: string | null;
      userId?: string | null;
    } | null;
    renter?: {
      __typename?: "Renter";
      id?: string | null;
      createdAt?: any | null;
      updatedAt?: any | null;
      userId?: string | null;
    } | null;
  } | null;
};

export type MutationUpsertBuyDetailMutationVariables = Exact<{
  input: BuyDetailInput;
  propertyId: Scalars["ID"]["input"];
}>;

export type MutationUpsertBuyDetailMutation = {
  __typename?: "Mutation";
  upsertBuyDetail?: {
    __typename?: "BuyDetail";
    id?: string | null;
    developerName?: string | null;
    handoverDate?: any | null;
    isDeveloper?: boolean | null;
    ownerType?: string | null;
    ownership?: string | null;
    projectName?: string | null;
    paymentPlan?: {
      __typename?: "PaymentPlan";
      id?: string | null;
      createdAt?: any | null;
      updatedAt?: any | null;
    } | null;
  } | null;
};

export type MutationUpsertPropertyPaymentPlanMutationVariables = Exact<{
  input: PaymentPlanInput;
  propertyId: Scalars["ID"]["input"];
}>;

export type MutationUpsertPropertyPaymentPlanMutation = {
  __typename?: "Mutation";
  upsertPropertyPaymentPlan?: {
    __typename?: "PaymentPlan";
    id?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    installments?: Array<{
      __typename?: "Installment";
      id?: string | null;
      amount?: number | null;
      dueDate?: any | null;
      label?: string | null;
    }> | null;
  } | null;
};

export type MutationUpsertRentDetailMutationVariables = Exact<{
  input: RentDetailInput;
  propertyId: Scalars["ID"]["input"];
}>;

export type MutationUpsertRentDetailMutation = {
  __typename?: "Mutation";
  upsertRentDetail?: {
    __typename?: "RentDetail";
    id?: string | null;
    cheques?: number | null;
    chillerIncluded?: boolean | null;
    depositAmount?: number | null;
    maintenanceBy?: string | null;
    minLeaseTerm?: number | null;
    petsAllowed?: boolean | null;
  } | null;
};

export type MutationUpsertRoommateProfileMutationVariables = Exact<{
  input: RoommateProfileInput;
}>;

export type MutationUpsertRoommateProfileMutation = {
  __typename?: "Mutation";
  upsertRoommateProfile?: {
    __typename?: "RoommateProfile";
    id?: string | null;
    status?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    age?: number | null;
    area?: string | null;
    bio?: string | null;
    budgetMax?: number | null;
    budgetMin?: number | null;
    city?: string | null;
  } | null;
};

export type MutationUpsertSellDetailMutationVariables = Exact<{
  input: SellDetailInput;
  propertyId: Scalars["ID"]["input"];
}>;

export type MutationUpsertSellDetailMutation = {
  __typename?: "Mutation";
  upsertSellDetail?: {
    __typename?: "SellDetail";
    id?: string | null;
    commissionPaidBy?: string | null;
    inspectionStatus?: string | null;
    isOffMarket?: boolean | null;
    propertyId?: string | null;
    sellerType?: string | null;
    priceHistory?: Array<{
      __typename?: "PriceHistory";
      id?: string | null;
      changedAt?: any | null;
      price?: number | null;
      propertyId?: string | null;
    }> | null;
  } | null;
};

export type UserProfileFragment = {
  __typename?: "User";
  id?: string | null;
  name?: string | null;
  email?: string | null;
  emailVerified?: boolean | null;
  role?: string | null;
  image?: string | null;
} & { " $fragmentName"?: "UserProfileFragment" };

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = {
  __typename?: "Query";
  me?:
    | ({ __typename?: "User" } & {
        " $fragmentRefs"?: { UserProfileFragment: UserProfileFragment };
      })
    | null;
};

export const UserProfileFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "UserProfile" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "User" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "email" } },
          { kind: "Field", name: { kind: "Name", value: "emailVerified" } },
          { kind: "Field", name: { kind: "Name", value: "role" } },
          { kind: "Field", name: { kind: "Name", value: "image" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UserProfileFragment, unknown>;
export const QueryAdminDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryAdmin" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "admin" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                      { kind: "Field", name: { kind: "Name", value: "role" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<QueryAdminQuery, QueryAdminQueryVariables>;
export const QueryAdminAnalyticsOverviewDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryAdminAnalyticsOverview" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "adminAnalyticsOverview" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "activeSubscriptions" },
                },
                { kind: "Field", name: { kind: "Name", value: "openReports" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "pendingProperties" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "totalInquiries" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "totalProperties" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QueryAdminAnalyticsOverviewQuery,
  QueryAdminAnalyticsOverviewQueryVariables
>;
export const QueryAdminPendingPropertiesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryAdminPendingProperties" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "adminPendingProperties" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "availableFrom" },
                },
                { kind: "Field", name: { kind: "Name", value: "bathrooms" } },
                { kind: "Field", name: { kind: "Name", value: "bedrooms" } },
                { kind: "Field", name: { kind: "Name", value: "builtUpArea" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "amenities" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "amenityId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "propertyId" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "buyDetail" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "developerName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "handoverDate" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "isDeveloper" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "documents" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "label" } },
                      { kind: "Field", name: { kind: "Name", value: "type" } },
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QueryAdminPendingPropertiesQuery,
  QueryAdminPendingPropertiesQueryVariables
>;
export const QueryAdminsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryAdmins" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "admins" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                      { kind: "Field", name: { kind: "Name", value: "role" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<QueryAdminsQuery, QueryAdminsQueryVariables>;
export const QueryAgencyDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryAgency" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "agencyId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "agency" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "agencyId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "agencyId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "licenseNumber" },
                },
                { kind: "Field", name: { kind: "Name", value: "logo" } },
                { kind: "Field", name: { kind: "Name", value: "ownerId" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<QueryAgencyQuery, QueryAgencyQueryVariables>;
export const QueryAgencyAdvertisingRequestsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryAgencyAdvertisingRequests" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filter" },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "AgencyAdvertisingRequestFilterInput",
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "agencyAdvertisingRequests" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "filter" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "agencyName" } },
                { kind: "Field", name: { kind: "Name", value: "budget" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "contactEmail" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "contactPhone" },
                },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "rejectionReason" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QueryAgencyAdvertisingRequestsQuery,
  QueryAgencyAdvertisingRequestsQueryVariables
>;
export const QueryAmenitiesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryAmenities" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filter" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "AmenityFilterInput" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "amenities" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "filter" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "category" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<QueryAmenitiesQuery, QueryAmenitiesQueryVariables>;
export const QueryArticleDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryArticle" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "articleId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "article" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "articleId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "articleId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "authorId" } },
                { kind: "Field", name: { kind: "Name", value: "authorName" } },
                { kind: "Field", name: { kind: "Name", value: "categoryId" } },
                { kind: "Field", name: { kind: "Name", value: "content" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "category" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<QueryArticleQuery, QueryArticleQueryVariables>;
export const QueryArticleBySlugDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryArticleBySlug" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "slug" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "articleBySlug" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "slug" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "slug" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "authorId" } },
                { kind: "Field", name: { kind: "Name", value: "authorName" } },
                { kind: "Field", name: { kind: "Name", value: "categoryId" } },
                { kind: "Field", name: { kind: "Name", value: "content" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "category" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QueryArticleBySlugQuery,
  QueryArticleBySlugQueryVariables
>;
export const QueryArticleCategoriesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryArticleCategories" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "articleCategories" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "code" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QueryArticleCategoriesQuery,
  QueryArticleCategoriesQueryVariables
>;
export const QueryArticlesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryArticles" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filter" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "ArticleFilterInput" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "articles" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "filter" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "authorId" } },
                { kind: "Field", name: { kind: "Name", value: "authorName" } },
                { kind: "Field", name: { kind: "Name", value: "categoryId" } },
                { kind: "Field", name: { kind: "Name", value: "content" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "category" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<QueryArticlesQuery, QueryArticlesQueryVariables>;
export const QueryAttorneyDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryAttorney" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "attorneyId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "attorney" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "attorneyId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "attorneyId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "city" } },
                { kind: "Field", name: { kind: "Name", value: "createdById" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<QueryAttorneyQuery, QueryAttorneyQueryVariables>;
export const QueryAttorneysDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryAttorneys" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filter" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "AttorneyFilterInput" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "attorneys" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "filter" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "city" } },
                { kind: "Field", name: { kind: "Name", value: "createdById" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<QueryAttorneysQuery, QueryAttorneysQueryVariables>;
export const QueryCareerPostDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryCareerPost" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "careerPostId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "careerPost" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "careerPostId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "careerPostId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "createdById" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "employmentType" },
                },
                { kind: "Field", name: { kind: "Name", value: "location" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QueryCareerPostQuery,
  QueryCareerPostQueryVariables
>;
export const QueryCareerPostsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryCareerPosts" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filter" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "CareerPostFilterInput" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "careerPosts" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "filter" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "createdById" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "employmentType" },
                },
                { kind: "Field", name: { kind: "Name", value: "location" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QueryCareerPostsQuery,
  QueryCareerPostsQueryVariables
>;
export const QueryContactMessagesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryContactMessages" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filter" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "ContactMessageFilterInput" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "contactMessages" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "filter" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                { kind: "Field", name: { kind: "Name", value: "phone" } },
                { kind: "Field", name: { kind: "Name", value: "subject" } },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QueryContactMessagesQuery,
  QueryContactMessagesQueryVariables
>;
export const QueryConversationDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryConversation" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "conversationId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "conversation" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "conversationId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "conversationId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "contextId" } },
                { kind: "Field", name: { kind: "Name", value: "contextType" } },
                { kind: "Field", name: { kind: "Name", value: "createdById" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "lastMessageAt" },
                },
                { kind: "Field", name: { kind: "Name", value: "subject" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "participants" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "archivedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "conversationId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "joinedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "lastReadAt" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QueryConversationQuery,
  QueryConversationQueryVariables
>;
export const QueryConversationsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryConversations" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filter" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "ConversationFilterInput" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "conversations" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "filter" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "contextId" } },
                { kind: "Field", name: { kind: "Name", value: "contextType" } },
                { kind: "Field", name: { kind: "Name", value: "createdById" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "lastMessageAt" },
                },
                { kind: "Field", name: { kind: "Name", value: "subject" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "participants" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "archivedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "conversationId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "joinedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "lastReadAt" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QueryConversationsQuery,
  QueryConversationsQueryVariables
>;
export const QueryInquiriesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryInquiries" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filter" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "InquiryFilterInput" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "inquiries" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "filter" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                { kind: "Field", name: { kind: "Name", value: "phone" } },
                { kind: "Field", name: { kind: "Name", value: "propertyId" } },
                { kind: "Field", name: { kind: "Name", value: "source" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "property" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<QueryInquiriesQuery, QueryInquiriesQueryVariables>;
export const QueryInquiryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryInquiry" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "inquiryId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "inquiry" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "inquiryId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "inquiryId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                { kind: "Field", name: { kind: "Name", value: "phone" } },
                { kind: "Field", name: { kind: "Name", value: "propertyId" } },
                { kind: "Field", name: { kind: "Name", value: "source" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "property" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<QueryInquiryQuery, QueryInquiryQueryVariables>;
export const QueryMarketplaceItemDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryMarketplaceItem" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "itemId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "marketplaceItem" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "itemId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "itemId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "archivedAt" } },
                { kind: "Field", name: { kind: "Name", value: "category" } },
                { kind: "Field", name: { kind: "Name", value: "city" } },
                { kind: "Field", name: { kind: "Name", value: "condition" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QueryMarketplaceItemQuery,
  QueryMarketplaceItemQueryVariables
>;
export const QueryMarketplaceItemsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryMarketplaceItems" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filter" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "MarketplaceItemFilterInput" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "marketplaceItems" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "filter" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "archivedAt" } },
                { kind: "Field", name: { kind: "Name", value: "category" } },
                { kind: "Field", name: { kind: "Name", value: "city" } },
                { kind: "Field", name: { kind: "Name", value: "condition" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QueryMarketplaceItemsQuery,
  QueryMarketplaceItemsQueryVariables
>;
export const QueryMeDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryMe" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "me" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "role" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "emailVerified" },
                },
                { kind: "Field", name: { kind: "Name", value: "image" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "admin" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "userId" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "renter" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "userId" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<QueryMeQuery, QueryMeQueryVariables>;
export const QueryMessagesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryMessages" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "conversationId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "limit" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "offset" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "messages" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "conversationId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "conversationId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "limit" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "offset" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "offset" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "body" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "conversationId" },
                },
                { kind: "Field", name: { kind: "Name", value: "senderId" } },
                { kind: "Field", name: { kind: "Name", value: "type" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<QueryMessagesQuery, QueryMessagesQueryVariables>;
export const QueryMyMarketplaceItemsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryMyMarketplaceItems" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "myMarketplaceItems" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "archivedAt" } },
                { kind: "Field", name: { kind: "Name", value: "category" } },
                { kind: "Field", name: { kind: "Name", value: "city" } },
                { kind: "Field", name: { kind: "Name", value: "condition" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QueryMyMarketplaceItemsQuery,
  QueryMyMarketplaceItemsQueryVariables
>;
export const QueryMyProfileDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryMyProfile" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "myProfile" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                      { kind: "Field", name: { kind: "Name", value: "role" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<QueryMyProfileQuery, QueryMyProfileQueryVariables>;
export const QueryMyRoommateProfileDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryMyRoommateProfile" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "myRoommateProfile" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "age" } },
                { kind: "Field", name: { kind: "Name", value: "area" } },
                { kind: "Field", name: { kind: "Name", value: "bio" } },
                { kind: "Field", name: { kind: "Name", value: "budgetMax" } },
                { kind: "Field", name: { kind: "Name", value: "budgetMin" } },
                { kind: "Field", name: { kind: "Name", value: "city" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QueryMyRoommateProfileQuery,
  QueryMyRoommateProfileQueryVariables
>;
export const QueryMyServiceRequestsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryMyServiceRequests" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "myServiceRequests" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "listingId" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "preferredDate" },
                },
                { kind: "Field", name: { kind: "Name", value: "requesterId" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "requesterName" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "listing" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QueryMyServiceRequestsQuery,
  QueryMyServiceRequestsQueryVariables
>;
export const QueryMySubscriptionsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryMySubscriptions" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "mySubscriptions" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "agentId" } },
                { kind: "Field", name: { kind: "Name", value: "expiresAt" } },
                { kind: "Field", name: { kind: "Name", value: "isActive" } },
                { kind: "Field", name: { kind: "Name", value: "planId" } },
                { kind: "Field", name: { kind: "Name", value: "startsAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "plan" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QueryMySubscriptionsQuery,
  QueryMySubscriptionsQueryVariables
>;
export const QueryNotificationsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryNotifications" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filter" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "NotificationFilterInput" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "notifications" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "filter" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "body" } },
                { kind: "Field", name: { kind: "Name", value: "isRead" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "metadataJson" },
                },
                { kind: "Field", name: { kind: "Name", value: "type" } },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QueryNotificationsQuery,
  QueryNotificationsQueryVariables
>;
export const QueryProfessionalApplicationsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryProfessionalApplications" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filter" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "AgentApplicationFilterInput" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "professionalApplications" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "filter" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "applicantEmail" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "applicantName" },
                },
                { kind: "Field", name: { kind: "Name", value: "city" } },
                { kind: "Field", name: { kind: "Name", value: "experience" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "licenseNumber" },
                },
                { kind: "Field", name: { kind: "Name", value: "motivation" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QueryProfessionalApplicationsQuery,
  QueryProfessionalApplicationsQueryVariables
>;
export const QueryPropertiesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryProperties" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filter" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "PropertyFilterInput" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "properties" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "filter" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "availableFrom" },
                },
                { kind: "Field", name: { kind: "Name", value: "bathrooms" } },
                { kind: "Field", name: { kind: "Name", value: "bedrooms" } },
                { kind: "Field", name: { kind: "Name", value: "builtUpArea" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "amenities" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "amenityId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "propertyId" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "buyDetail" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "developerName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "handoverDate" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "isDeveloper" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "documents" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "label" } },
                      { kind: "Field", name: { kind: "Name", value: "type" } },
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QueryPropertiesQuery,
  QueryPropertiesQueryVariables
>;
export const QueryPropertyDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryProperty" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "slug" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "property" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "slug" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "slug" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "availableFrom" },
                },
                { kind: "Field", name: { kind: "Name", value: "bathrooms" } },
                { kind: "Field", name: { kind: "Name", value: "bedrooms" } },
                { kind: "Field", name: { kind: "Name", value: "builtUpArea" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "amenities" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "amenityId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "propertyId" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "buyDetail" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "developerName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "handoverDate" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "isDeveloper" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "documents" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "label" } },
                      { kind: "Field", name: { kind: "Name", value: "type" } },
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<QueryPropertyQuery, QueryPropertyQueryVariables>;
export const QueryPropertyAnalyticsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryPropertyAnalytics" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "propertyId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "propertyAnalytics" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "propertyId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "propertyId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "inquiries" } },
                { kind: "Field", name: { kind: "Name", value: "reviews" } },
                { kind: "Field", name: { kind: "Name", value: "viewings" } },
                { kind: "Field", name: { kind: "Name", value: "views" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QueryPropertyAnalyticsQuery,
  QueryPropertyAnalyticsQueryVariables
>;
export const QueryPropertyBoostsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryPropertyBoosts" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "propertyId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "propertyBoosts" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "propertyId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "propertyId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "agentId" } },
                { kind: "Field", name: { kind: "Name", value: "expiresAt" } },
                { kind: "Field", name: { kind: "Name", value: "propertyId" } },
                { kind: "Field", name: { kind: "Name", value: "startsAt" } },
                { kind: "Field", name: { kind: "Name", value: "type" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "property" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QueryPropertyBoostsQuery,
  QueryPropertyBoostsQueryVariables
>;
export const QueryPropertyBuyDetailDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryPropertyBuyDetail" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "propertyId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "propertyBuyDetail" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "propertyId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "propertyId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "developerName" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "handoverDate" },
                },
                { kind: "Field", name: { kind: "Name", value: "isDeveloper" } },
                { kind: "Field", name: { kind: "Name", value: "ownerType" } },
                { kind: "Field", name: { kind: "Name", value: "ownership" } },
                { kind: "Field", name: { kind: "Name", value: "projectName" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "paymentPlan" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QueryPropertyBuyDetailQuery,
  QueryPropertyBuyDetailQueryVariables
>;
export const QueryPropertyMediaDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryPropertyMedia" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "propertyId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "propertyMedia" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "propertyId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "propertyId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "isPrimary" } },
                { kind: "Field", name: { kind: "Name", value: "order" } },
                { kind: "Field", name: { kind: "Name", value: "type" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QueryPropertyMediaQuery,
  QueryPropertyMediaQueryVariables
>;
export const QueryPropertyPriceHistoryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryPropertyPriceHistory" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "propertyId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "propertyPriceHistory" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "propertyId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "propertyId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "changedAt" } },
                { kind: "Field", name: { kind: "Name", value: "price" } },
                { kind: "Field", name: { kind: "Name", value: "propertyId" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QueryPropertyPriceHistoryQuery,
  QueryPropertyPriceHistoryQueryVariables
>;
export const QueryPropertyRentDetailDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryPropertyRentDetail" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "propertyId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "propertyRentDetail" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "propertyId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "propertyId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "cheques" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "chillerIncluded" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "depositAmount" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "maintenanceBy" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "minLeaseTerm" },
                },
                { kind: "Field", name: { kind: "Name", value: "petsAllowed" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QueryPropertyRentDetailQuery,
  QueryPropertyRentDetailQueryVariables
>;
export const QueryPropertyReviewsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryPropertyReviews" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "propertyId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "propertyReviews" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "propertyId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "propertyId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "comment" } },
                { kind: "Field", name: { kind: "Name", value: "propertyId" } },
                { kind: "Field", name: { kind: "Name", value: "rating" } },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "property" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QueryPropertyReviewsQuery,
  QueryPropertyReviewsQueryVariables
>;
export const QueryPropertySearchDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryPropertySearch" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filter" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "PropertySearchInput" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "propertySearch" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "filter" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "availableFrom" },
                },
                { kind: "Field", name: { kind: "Name", value: "bathrooms" } },
                { kind: "Field", name: { kind: "Name", value: "bedrooms" } },
                { kind: "Field", name: { kind: "Name", value: "builtUpArea" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "amenities" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "amenityId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "propertyId" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "buyDetail" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "developerName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "handoverDate" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "isDeveloper" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "documents" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "label" } },
                      { kind: "Field", name: { kind: "Name", value: "type" } },
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QueryPropertySearchQuery,
  QueryPropertySearchQueryVariables
>;
export const QueryPropertySellDetailDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryPropertySellDetail" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "propertyId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "propertySellDetail" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "propertyId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "propertyId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "commissionPaidBy" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "inspectionStatus" },
                },
                { kind: "Field", name: { kind: "Name", value: "isOffMarket" } },
                { kind: "Field", name: { kind: "Name", value: "propertyId" } },
                { kind: "Field", name: { kind: "Name", value: "sellerType" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "priceHistory" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "changedAt" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "price" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "propertyId" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QueryPropertySellDetailQuery,
  QueryPropertySellDetailQueryVariables
>;
export const QueryPropertySellPriceHistoryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryPropertySellPriceHistory" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "propertyId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "propertySellPriceHistory" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "propertyId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "propertyId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "changedAt" } },
                { kind: "Field", name: { kind: "Name", value: "price" } },
                { kind: "Field", name: { kind: "Name", value: "propertyId" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QueryPropertySellPriceHistoryQuery,
  QueryPropertySellPriceHistoryQueryVariables
>;
export const QueryRenterDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryRenter" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "renter" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                      { kind: "Field", name: { kind: "Name", value: "role" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<QueryRenterQuery, QueryRenterQueryVariables>;
export const QueryRentersDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryRenters" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "search" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "RenterSearchInput" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "renters" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "search" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "search" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                      { kind: "Field", name: { kind: "Name", value: "role" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<QueryRentersQuery, QueryRentersQueryVariables>;
export const QueryReportsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryReports" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filter" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "ReportFilterInput" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "reports" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "filter" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "propertyId" } },
                { kind: "Field", name: { kind: "Name", value: "reason" } },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "property" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<QueryReportsQuery, QueryReportsQueryVariables>;
export const QueryRoommateProfileDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryRoommateProfile" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "profileId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "roommateProfile" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "profileId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "profileId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "age" } },
                { kind: "Field", name: { kind: "Name", value: "area" } },
                { kind: "Field", name: { kind: "Name", value: "bio" } },
                { kind: "Field", name: { kind: "Name", value: "budgetMax" } },
                { kind: "Field", name: { kind: "Name", value: "budgetMin" } },
                { kind: "Field", name: { kind: "Name", value: "city" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QueryRoommateProfileQuery,
  QueryRoommateProfileQueryVariables
>;
export const QueryRoommateProfilesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryRoommateProfiles" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filter" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "RoommateProfileFilterInput" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "roommateProfiles" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "filter" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "age" } },
                { kind: "Field", name: { kind: "Name", value: "area" } },
                { kind: "Field", name: { kind: "Name", value: "bio" } },
                { kind: "Field", name: { kind: "Name", value: "budgetMax" } },
                { kind: "Field", name: { kind: "Name", value: "budgetMin" } },
                { kind: "Field", name: { kind: "Name", value: "city" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QueryRoommateProfilesQuery,
  QueryRoommateProfilesQueryVariables
>;
export const QuerySavedMarketplaceItemsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QuerySavedMarketplaceItems" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "savedMarketplaceItems" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "itemId" } },
                { kind: "Field", name: { kind: "Name", value: "savedAt" } },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "item" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QuerySavedMarketplaceItemsQuery,
  QuerySavedMarketplaceItemsQueryVariables
>;
export const QuerySavedPropertiesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QuerySavedProperties" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "savedProperties" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "propertyId" } },
                { kind: "Field", name: { kind: "Name", value: "savedAt" } },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "property" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QuerySavedPropertiesQuery,
  QuerySavedPropertiesQueryVariables
>;
export const QuerySavedRoommateProfilesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QuerySavedRoommateProfiles" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "savedRoommateProfiles" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "profileId" } },
                { kind: "Field", name: { kind: "Name", value: "savedAt" } },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "profile" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QuerySavedRoommateProfilesQuery,
  QuerySavedRoommateProfilesQueryVariables
>;
export const QuerySavedSearchesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QuerySavedSearches" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "savedSearches" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "alertEnabled" },
                },
                { kind: "Field", name: { kind: "Name", value: "filtersJson" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "lastNotifiedAt" },
                },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QuerySavedSearchesQuery,
  QuerySavedSearchesQueryVariables
>;
export const QueryServiceListingDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryServiceListing" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "listingId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "serviceListing" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "listingId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "listingId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "category" } },
                { kind: "Field", name: { kind: "Name", value: "city" } },
                { kind: "Field", name: { kind: "Name", value: "currency" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "provider" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QueryServiceListingQuery,
  QueryServiceListingQueryVariables
>;
export const QueryServiceListingsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryServiceListings" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filter" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "ServiceListingFilterInput" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "serviceListings" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "filter" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "category" } },
                { kind: "Field", name: { kind: "Name", value: "city" } },
                { kind: "Field", name: { kind: "Name", value: "currency" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "provider" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QueryServiceListingsQuery,
  QueryServiceListingsQueryVariables
>;
export const QueryServiceProviderDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryServiceProvider" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "providerId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "serviceProvider" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "providerId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "providerId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "businessName" },
                },
                { kind: "Field", name: { kind: "Name", value: "city" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "isVerified" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QueryServiceProviderQuery,
  QueryServiceProviderQueryVariables
>;
export const QueryServiceProvidersDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryServiceProviders" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filter" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "ServiceProviderFilterInput" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "serviceProviders" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "filter" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "businessName" },
                },
                { kind: "Field", name: { kind: "Name", value: "city" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "isVerified" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QueryServiceProvidersQuery,
  QueryServiceProvidersQueryVariables
>;
export const QuerySimilarPropertiesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QuerySimilarProperties" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "limit" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "propertyId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "similarProperties" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "limit" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "propertyId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "propertyId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "availableFrom" },
                },
                { kind: "Field", name: { kind: "Name", value: "bathrooms" } },
                { kind: "Field", name: { kind: "Name", value: "bedrooms" } },
                { kind: "Field", name: { kind: "Name", value: "builtUpArea" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "amenities" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "amenityId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "propertyId" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "buyDetail" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "developerName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "handoverDate" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "isDeveloper" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "documents" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "label" } },
                      { kind: "Field", name: { kind: "Name", value: "type" } },
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QuerySimilarPropertiesQuery,
  QuerySimilarPropertiesQueryVariables
>;
export const QueryStaticPageDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryStaticPage" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "pageId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "staticPage" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pageId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "pageId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "content" } },
                { kind: "Field", name: { kind: "Name", value: "createdById" } },
                { kind: "Field", name: { kind: "Name", value: "publishedAt" } },
                { kind: "Field", name: { kind: "Name", value: "summary" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QueryStaticPageQuery,
  QueryStaticPageQueryVariables
>;
export const QueryStaticPageBySlugDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryStaticPageBySlug" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "slug" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "staticPageBySlug" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "slug" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "slug" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "content" } },
                { kind: "Field", name: { kind: "Name", value: "createdById" } },
                { kind: "Field", name: { kind: "Name", value: "publishedAt" } },
                { kind: "Field", name: { kind: "Name", value: "summary" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QueryStaticPageBySlugQuery,
  QueryStaticPageBySlugQueryVariables
>;
export const QueryStaticPagesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryStaticPages" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filter" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "StaticPageFilterInput" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "staticPages" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "filter" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "content" } },
                { kind: "Field", name: { kind: "Name", value: "createdById" } },
                { kind: "Field", name: { kind: "Name", value: "publishedAt" } },
                { kind: "Field", name: { kind: "Name", value: "summary" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QueryStaticPagesQuery,
  QueryStaticPagesQueryVariables
>;
export const QuerySubscriptionPlansDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QuerySubscriptionPlans" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "subscriptionPlans" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "boostCredits" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "durationDays" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "featuresJson" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "listingLimit" },
                },
                { kind: "Field", name: { kind: "Name", value: "price" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QuerySubscriptionPlansQuery,
  QuerySubscriptionPlansQueryVariables
>;
export const QueryUserDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryUser" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "role" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "emailVerified" },
                },
                { kind: "Field", name: { kind: "Name", value: "image" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "admin" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "userId" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "renter" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "userId" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<QueryUserQuery, QueryUserQueryVariables>;
export const QueryUsersDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryUsers" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "search" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "UserSearchInput" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "users" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "search" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "search" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "role" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "emailVerified" },
                },
                { kind: "Field", name: { kind: "Name", value: "image" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "admin" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "userId" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "renter" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "userId" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<QueryUsersQuery, QueryUsersQueryVariables>;
export const QueryViewingDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryViewing" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "viewingId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "viewing" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "viewingId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "viewingId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "inquiryId" } },
                { kind: "Field", name: { kind: "Name", value: "propertyId" } },
                { kind: "Field", name: { kind: "Name", value: "scheduledAt" } },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "property" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<QueryViewingQuery, QueryViewingQueryVariables>;
export const QueryViewingsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryViewings" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filter" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "ViewingFilterInput" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "viewings" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "filter" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "inquiryId" } },
                { kind: "Field", name: { kind: "Name", value: "propertyId" } },
                { kind: "Field", name: { kind: "Name", value: "scheduledAt" } },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "property" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<QueryViewingsQuery, QueryViewingsQueryVariables>;
export const MutationAddAgencyAgentDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationAddAgencyAgent" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "agencyId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "agentId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "addAgencyAgent" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "agencyId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "agencyId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "agentId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "agentId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "licenseNumber" },
                },
                { kind: "Field", name: { kind: "Name", value: "logo" } },
                { kind: "Field", name: { kind: "Name", value: "ownerId" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationAddAgencyAgentMutation,
  MutationAddAgencyAgentMutationVariables
>;
export const MutationAddPropertyMediaDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationAddPropertyMedia" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "AddPropertyMediaInput" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "propertyId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "addPropertyMedia" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "propertyId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "propertyId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "availableFrom" },
                },
                { kind: "Field", name: { kind: "Name", value: "bathrooms" } },
                { kind: "Field", name: { kind: "Name", value: "bedrooms" } },
                { kind: "Field", name: { kind: "Name", value: "builtUpArea" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "amenities" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "amenityId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "propertyId" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "buyDetail" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "developerName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "handoverDate" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "isDeveloper" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "documents" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "label" } },
                      { kind: "Field", name: { kind: "Name", value: "type" } },
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationAddPropertyMediaMutation,
  MutationAddPropertyMediaMutationVariables
>;
export const MutationApplyAsAgentDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationApplyAsAgent" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "AgentApplicationInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "applyAsAgent" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "applicantEmail" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "applicantName" },
                },
                { kind: "Field", name: { kind: "Name", value: "city" } },
                { kind: "Field", name: { kind: "Name", value: "experience" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "licenseNumber" },
                },
                { kind: "Field", name: { kind: "Name", value: "motivation" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationApplyAsAgentMutation,
  MutationApplyAsAgentMutationVariables
>;
export const MutationApproveAgentApplicationDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationApproveAgentApplication" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "applicationId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "approveAgentApplication" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "applicationId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "applicationId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "applicantEmail" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "applicantName" },
                },
                { kind: "Field", name: { kind: "Name", value: "city" } },
                { kind: "Field", name: { kind: "Name", value: "experience" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "licenseNumber" },
                },
                { kind: "Field", name: { kind: "Name", value: "motivation" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationApproveAgentApplicationMutation,
  MutationApproveAgentApplicationMutationVariables
>;
export const MutationApprovePropertyForAdminDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationApprovePropertyForAdmin" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "propertyId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "approvePropertyForAdmin" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "propertyId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "propertyId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "availableFrom" },
                },
                { kind: "Field", name: { kind: "Name", value: "bathrooms" } },
                { kind: "Field", name: { kind: "Name", value: "bedrooms" } },
                { kind: "Field", name: { kind: "Name", value: "builtUpArea" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "amenities" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "amenityId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "propertyId" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "buyDetail" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "developerName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "handoverDate" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "isDeveloper" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "documents" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "label" } },
                      { kind: "Field", name: { kind: "Name", value: "type" } },
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationApprovePropertyForAdminMutation,
  MutationApprovePropertyForAdminMutationVariables
>;
export const MutationArchiveArticleDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationArchiveArticle" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "articleId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "archiveArticle" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "articleId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "articleId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "authorId" } },
                { kind: "Field", name: { kind: "Name", value: "authorName" } },
                { kind: "Field", name: { kind: "Name", value: "categoryId" } },
                { kind: "Field", name: { kind: "Name", value: "content" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "category" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationArchiveArticleMutation,
  MutationArchiveArticleMutationVariables
>;
export const MutationArchiveCareerPostDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationArchiveCareerPost" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "careerPostId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "archiveCareerPost" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "careerPostId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "careerPostId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "createdById" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "employmentType" },
                },
                { kind: "Field", name: { kind: "Name", value: "location" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationArchiveCareerPostMutation,
  MutationArchiveCareerPostMutationVariables
>;
export const MutationArchiveConversationDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationArchiveConversation" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "conversationId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "archiveConversation" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "conversationId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "conversationId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "archivedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "conversationId" },
                },
                { kind: "Field", name: { kind: "Name", value: "joinedAt" } },
                { kind: "Field", name: { kind: "Name", value: "lastReadAt" } },
                { kind: "Field", name: { kind: "Name", value: "userEmail" } },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationArchiveConversationMutation,
  MutationArchiveConversationMutationVariables
>;
export const MutationArchiveMarketplaceItemDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationArchiveMarketplaceItem" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "itemId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "archiveMarketplaceItem" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "itemId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "itemId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "archivedAt" } },
                { kind: "Field", name: { kind: "Name", value: "category" } },
                { kind: "Field", name: { kind: "Name", value: "city" } },
                { kind: "Field", name: { kind: "Name", value: "condition" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationArchiveMarketplaceItemMutation,
  MutationArchiveMarketplaceItemMutationVariables
>;
export const MutationArchivePropertyDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationArchiveProperty" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "propertyId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "archiveProperty" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "propertyId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "propertyId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "availableFrom" },
                },
                { kind: "Field", name: { kind: "Name", value: "bathrooms" } },
                { kind: "Field", name: { kind: "Name", value: "bedrooms" } },
                { kind: "Field", name: { kind: "Name", value: "builtUpArea" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "amenities" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "amenityId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "propertyId" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "buyDetail" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "developerName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "handoverDate" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "isDeveloper" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "documents" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "label" } },
                      { kind: "Field", name: { kind: "Name", value: "type" } },
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationArchivePropertyMutation,
  MutationArchivePropertyMutationVariables
>;
export const MutationArchiveStaticPageDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationArchiveStaticPage" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "pageId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "archiveStaticPage" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pageId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "pageId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "content" } },
                { kind: "Field", name: { kind: "Name", value: "createdById" } },
                { kind: "Field", name: { kind: "Name", value: "publishedAt" } },
                { kind: "Field", name: { kind: "Name", value: "summary" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationArchiveStaticPageMutation,
  MutationArchiveStaticPageMutationVariables
>;
export const MutationCalculateAffordabilityDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationCalculateAffordability" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "AffordabilityCalculatorInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "calculateAffordability" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "disposableIncome" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "estimatedPurchasePrice" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "maxAffordableRepayment" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "maxLoanAmount" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationCalculateAffordabilityMutation,
  MutationCalculateAffordabilityMutationVariables
>;
export const MutationCalculateBondDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationCalculateBond" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "BondCalculatorInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "calculateBond" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "monthlyRepayment" },
                },
                { kind: "Field", name: { kind: "Name", value: "principal" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "totalInterest" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "totalRepayment" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationCalculateBondMutation,
  MutationCalculateBondMutationVariables
>;
export const MutationCancelViewingDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationCancelViewing" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "viewingId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "cancelViewing" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "viewingId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "viewingId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "inquiryId" } },
                { kind: "Field", name: { kind: "Name", value: "propertyId" } },
                { kind: "Field", name: { kind: "Name", value: "scheduledAt" } },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "property" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationCancelViewingMutation,
  MutationCancelViewingMutationVariables
>;
export const MutationCompleteViewingDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationCompleteViewing" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "viewingId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "completeViewing" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "viewingId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "viewingId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "inquiryId" } },
                { kind: "Field", name: { kind: "Name", value: "propertyId" } },
                { kind: "Field", name: { kind: "Name", value: "scheduledAt" } },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "property" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationCompleteViewingMutation,
  MutationCompleteViewingMutationVariables
>;
export const MutationConfirmViewingDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationConfirmViewing" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "viewingId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "confirmViewing" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "viewingId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "viewingId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "inquiryId" } },
                { kind: "Field", name: { kind: "Name", value: "propertyId" } },
                { kind: "Field", name: { kind: "Name", value: "scheduledAt" } },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "property" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationConfirmViewingMutation,
  MutationConfirmViewingMutationVariables
>;
export const MutationCreateAgencyDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationCreateAgency" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "AgencyInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createAgency" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "licenseNumber" },
                },
                { kind: "Field", name: { kind: "Name", value: "logo" } },
                { kind: "Field", name: { kind: "Name", value: "ownerId" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationCreateAgencyMutation,
  MutationCreateAgencyMutationVariables
>;
export const MutationCreateAmenityDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationCreateAmenity" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "AmenityInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createAmenity" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "category" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationCreateAmenityMutation,
  MutationCreateAmenityMutationVariables
>;
export const MutationCreateArticleDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationCreateArticle" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "ArticleInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createArticle" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "authorId" } },
                { kind: "Field", name: { kind: "Name", value: "authorName" } },
                { kind: "Field", name: { kind: "Name", value: "categoryId" } },
                { kind: "Field", name: { kind: "Name", value: "content" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "category" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationCreateArticleMutation,
  MutationCreateArticleMutationVariables
>;
export const MutationCreateAttorneyProfileDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationCreateAttorneyProfile" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "AttorneyProfileInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createAttorneyProfile" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "city" } },
                { kind: "Field", name: { kind: "Name", value: "createdById" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationCreateAttorneyProfileMutation,
  MutationCreateAttorneyProfileMutationVariables
>;
export const MutationCreateCareerPostDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationCreateCareerPost" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "CareerPostInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createCareerPost" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "createdById" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "employmentType" },
                },
                { kind: "Field", name: { kind: "Name", value: "location" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationCreateCareerPostMutation,
  MutationCreateCareerPostMutationVariables
>;
export const MutationCreateConversationDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationCreateConversation" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "CreateConversationInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createConversation" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "contextId" } },
                { kind: "Field", name: { kind: "Name", value: "contextType" } },
                { kind: "Field", name: { kind: "Name", value: "createdById" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "lastMessageAt" },
                },
                { kind: "Field", name: { kind: "Name", value: "subject" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "participants" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "archivedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "conversationId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "joinedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "lastReadAt" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationCreateConversationMutation,
  MutationCreateConversationMutationVariables
>;
export const MutationCreateInquiryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationCreateInquiry" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "InquiryInput" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "propertyId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createInquiry" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "propertyId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "propertyId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                { kind: "Field", name: { kind: "Name", value: "phone" } },
                { kind: "Field", name: { kind: "Name", value: "propertyId" } },
                { kind: "Field", name: { kind: "Name", value: "source" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "property" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationCreateInquiryMutation,
  MutationCreateInquiryMutationVariables
>;
export const MutationCreateMarketplaceItemDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationCreateMarketplaceItem" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "MarketplaceItemInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createMarketplaceItem" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "archivedAt" } },
                { kind: "Field", name: { kind: "Name", value: "category" } },
                { kind: "Field", name: { kind: "Name", value: "city" } },
                { kind: "Field", name: { kind: "Name", value: "condition" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationCreateMarketplaceItemMutation,
  MutationCreateMarketplaceItemMutationVariables
>;
export const MutationCreatePropertyDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationCreateProperty" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "PropertyInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createProperty" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "availableFrom" },
                },
                { kind: "Field", name: { kind: "Name", value: "bathrooms" } },
                { kind: "Field", name: { kind: "Name", value: "bedrooms" } },
                { kind: "Field", name: { kind: "Name", value: "builtUpArea" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "amenities" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "amenityId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "propertyId" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "buyDetail" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "developerName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "handoverDate" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "isDeveloper" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "documents" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "label" } },
                      { kind: "Field", name: { kind: "Name", value: "type" } },
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationCreatePropertyMutation,
  MutationCreatePropertyMutationVariables
>;
export const MutationCreatePropertyBoostDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationCreatePropertyBoost" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "ListingBoostInput" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "propertyId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createPropertyBoost" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "propertyId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "propertyId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "agentId" } },
                { kind: "Field", name: { kind: "Name", value: "expiresAt" } },
                { kind: "Field", name: { kind: "Name", value: "propertyId" } },
                { kind: "Field", name: { kind: "Name", value: "startsAt" } },
                { kind: "Field", name: { kind: "Name", value: "type" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "property" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationCreatePropertyBoostMutation,
  MutationCreatePropertyBoostMutationVariables
>;
export const MutationCreatePropertyMediaUploadTargetDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationCreatePropertyMediaUploadTarget" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "CreatePropertyMediaUploadTargetInput",
              },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "propertyId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createPropertyMediaUploadTarget" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "propertyId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "propertyId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "contentType" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "expiresInSeconds" },
                },
                { kind: "Field", name: { kind: "Name", value: "key" } },
                { kind: "Field", name: { kind: "Name", value: "publicUrl" } },
                { kind: "Field", name: { kind: "Name", value: "uploadUrl" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationCreatePropertyMediaUploadTargetMutation,
  MutationCreatePropertyMediaUploadTargetMutationVariables
>;
export const MutationCreateReportDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationCreateReport" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "ReportInput" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "propertyId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createReport" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "propertyId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "propertyId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "propertyId" } },
                { kind: "Field", name: { kind: "Name", value: "reason" } },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "property" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationCreateReportMutation,
  MutationCreateReportMutationVariables
>;
export const MutationCreateReviewDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationCreateReview" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "ReviewInput" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "propertyId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createReview" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "propertyId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "propertyId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "comment" } },
                { kind: "Field", name: { kind: "Name", value: "propertyId" } },
                { kind: "Field", name: { kind: "Name", value: "rating" } },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "property" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationCreateReviewMutation,
  MutationCreateReviewMutationVariables
>;
export const MutationCreateSavedSearchDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationCreateSavedSearch" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SavedSearchInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createSavedSearch" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "alertEnabled" },
                },
                { kind: "Field", name: { kind: "Name", value: "filtersJson" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "lastNotifiedAt" },
                },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationCreateSavedSearchMutation,
  MutationCreateSavedSearchMutationVariables
>;
export const MutationCreateServiceListingDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationCreateServiceListing" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "ServiceListingInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createServiceListing" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "category" } },
                { kind: "Field", name: { kind: "Name", value: "city" } },
                { kind: "Field", name: { kind: "Name", value: "currency" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "provider" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationCreateServiceListingMutation,
  MutationCreateServiceListingMutationVariables
>;
export const MutationCreateServiceProviderDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationCreateServiceProvider" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "ServiceProviderInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createServiceProvider" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "businessName" },
                },
                { kind: "Field", name: { kind: "Name", value: "city" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "isVerified" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationCreateServiceProviderMutation,
  MutationCreateServiceProviderMutationVariables
>;
export const MutationCreateStaticPageDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationCreateStaticPage" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "StaticPageInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createStaticPage" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "content" } },
                { kind: "Field", name: { kind: "Name", value: "createdById" } },
                { kind: "Field", name: { kind: "Name", value: "publishedAt" } },
                { kind: "Field", name: { kind: "Name", value: "summary" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationCreateStaticPageMutation,
  MutationCreateStaticPageMutationVariables
>;
export const MutationCreateSubscriptionPlanDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationCreateSubscriptionPlan" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SubscriptionPlanInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createSubscriptionPlan" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "boostCredits" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "durationDays" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "featuresJson" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "listingLimit" },
                },
                { kind: "Field", name: { kind: "Name", value: "price" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationCreateSubscriptionPlanMutation,
  MutationCreateSubscriptionPlanMutationVariables
>;
export const MutationDeleteAdminDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationDeleteAdmin" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteAdmin" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                      { kind: "Field", name: { kind: "Name", value: "role" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationDeleteAdminMutation,
  MutationDeleteAdminMutationVariables
>;
export const MutationDeleteAmenityDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationDeleteAmenity" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "amenityId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteAmenity" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "amenityId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "amenityId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "category" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationDeleteAmenityMutation,
  MutationDeleteAmenityMutationVariables
>;
export const MutationDeleteArticleDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationDeleteArticle" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "articleId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteArticle" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "articleId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "articleId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "authorId" } },
                { kind: "Field", name: { kind: "Name", value: "authorName" } },
                { kind: "Field", name: { kind: "Name", value: "categoryId" } },
                { kind: "Field", name: { kind: "Name", value: "content" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "category" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationDeleteArticleMutation,
  MutationDeleteArticleMutationVariables
>;
export const MutationDeleteAttorneyProfileDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationDeleteAttorneyProfile" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "attorneyId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteAttorneyProfile" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "attorneyId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "attorneyId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "city" } },
                { kind: "Field", name: { kind: "Name", value: "createdById" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationDeleteAttorneyProfileMutation,
  MutationDeleteAttorneyProfileMutationVariables
>;
export const MutationDeleteMarketplaceItemDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationDeleteMarketplaceItem" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "itemId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteMarketplaceItem" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "itemId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "itemId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "archivedAt" } },
                { kind: "Field", name: { kind: "Name", value: "category" } },
                { kind: "Field", name: { kind: "Name", value: "city" } },
                { kind: "Field", name: { kind: "Name", value: "condition" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationDeleteMarketplaceItemMutation,
  MutationDeleteMarketplaceItemMutationVariables
>;
export const MutationDeleteNotificationDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationDeleteNotification" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "notificationId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteNotification" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "notificationId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "notificationId" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationDeleteNotificationMutation,
  MutationDeleteNotificationMutationVariables
>;
export const MutationDeletePropertyDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationDeleteProperty" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "propertyId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteProperty" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "propertyId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "propertyId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "availableFrom" },
                },
                { kind: "Field", name: { kind: "Name", value: "bathrooms" } },
                { kind: "Field", name: { kind: "Name", value: "bedrooms" } },
                { kind: "Field", name: { kind: "Name", value: "builtUpArea" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "amenities" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "amenityId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "propertyId" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "buyDetail" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "developerName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "handoverDate" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "isDeveloper" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "documents" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "label" } },
                      { kind: "Field", name: { kind: "Name", value: "type" } },
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationDeletePropertyMutation,
  MutationDeletePropertyMutationVariables
>;
export const MutationDeletePropertyBoostDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationDeletePropertyBoost" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "boostId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deletePropertyBoost" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "boostId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "boostId" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationDeletePropertyBoostMutation,
  MutationDeletePropertyBoostMutationVariables
>;
export const MutationDeletePropertyMediaDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationDeletePropertyMedia" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "mediaId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "propertyId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deletePropertyMedia" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "mediaId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "mediaId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "propertyId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "propertyId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "availableFrom" },
                },
                { kind: "Field", name: { kind: "Name", value: "bathrooms" } },
                { kind: "Field", name: { kind: "Name", value: "bedrooms" } },
                { kind: "Field", name: { kind: "Name", value: "builtUpArea" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "amenities" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "amenityId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "propertyId" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "buyDetail" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "developerName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "handoverDate" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "isDeveloper" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "documents" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "label" } },
                      { kind: "Field", name: { kind: "Name", value: "type" } },
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationDeletePropertyMediaMutation,
  MutationDeletePropertyMediaMutationVariables
>;
export const MutationDeleteRenterDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationDeleteRenter" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteRenter" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                      { kind: "Field", name: { kind: "Name", value: "role" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationDeleteRenterMutation,
  MutationDeleteRenterMutationVariables
>;
export const MutationDeleteReviewDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationDeleteReview" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "reviewId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteReview" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "reviewId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "reviewId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "comment" } },
                { kind: "Field", name: { kind: "Name", value: "propertyId" } },
                { kind: "Field", name: { kind: "Name", value: "rating" } },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "property" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationDeleteReviewMutation,
  MutationDeleteReviewMutationVariables
>;
export const MutationDeleteRoommateProfileDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationDeleteRoommateProfile" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "profileId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteRoommateProfile" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "profileId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "profileId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "age" } },
                { kind: "Field", name: { kind: "Name", value: "area" } },
                { kind: "Field", name: { kind: "Name", value: "bio" } },
                { kind: "Field", name: { kind: "Name", value: "budgetMax" } },
                { kind: "Field", name: { kind: "Name", value: "budgetMin" } },
                { kind: "Field", name: { kind: "Name", value: "city" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationDeleteRoommateProfileMutation,
  MutationDeleteRoommateProfileMutationVariables
>;
export const MutationDeleteSavedSearchDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationDeleteSavedSearch" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "savedSearchId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteSavedSearch" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "savedSearchId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "savedSearchId" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationDeleteSavedSearchMutation,
  MutationDeleteSavedSearchMutationVariables
>;
export const MutationDeleteServiceListingDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationDeleteServiceListing" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "listingId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteServiceListing" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "listingId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "listingId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "category" } },
                { kind: "Field", name: { kind: "Name", value: "city" } },
                { kind: "Field", name: { kind: "Name", value: "currency" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "provider" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationDeleteServiceListingMutation,
  MutationDeleteServiceListingMutationVariables
>;
export const MutationDeleteSubscriptionPlanDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationDeleteSubscriptionPlan" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "planId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteSubscriptionPlan" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "planId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "planId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "boostCredits" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "durationDays" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "featuresJson" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "listingLimit" },
                },
                { kind: "Field", name: { kind: "Name", value: "price" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationDeleteSubscriptionPlanMutation,
  MutationDeleteSubscriptionPlanMutationVariables
>;
export const MutationDeleteUserDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationDeleteUser" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteUser" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "role" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "emailVerified" },
                },
                { kind: "Field", name: { kind: "Name", value: "image" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "admin" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "userId" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "renter" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "userId" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationDeleteUserMutation,
  MutationDeleteUserMutationVariables
>;
export const MutationDuplicatePropertyDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationDuplicateProperty" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "propertyId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "duplicateProperty" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "propertyId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "propertyId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "availableFrom" },
                },
                { kind: "Field", name: { kind: "Name", value: "bathrooms" } },
                { kind: "Field", name: { kind: "Name", value: "bedrooms" } },
                { kind: "Field", name: { kind: "Name", value: "builtUpArea" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "amenities" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "amenityId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "propertyId" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "buyDetail" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "developerName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "handoverDate" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "isDeveloper" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "documents" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "label" } },
                      { kind: "Field", name: { kind: "Name", value: "type" } },
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationDuplicatePropertyMutation,
  MutationDuplicatePropertyMutationVariables
>;
export const MutationMarkAllNotificationsReadDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationMarkAllNotificationsRead" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "markAllNotificationsRead" },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationMarkAllNotificationsReadMutation,
  MutationMarkAllNotificationsReadMutationVariables
>;
export const MutationMarkConversationReadDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationMarkConversationRead" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "conversationId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "markConversationRead" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "conversationId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "conversationId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "archivedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "conversationId" },
                },
                { kind: "Field", name: { kind: "Name", value: "joinedAt" } },
                { kind: "Field", name: { kind: "Name", value: "lastReadAt" } },
                { kind: "Field", name: { kind: "Name", value: "userEmail" } },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationMarkConversationReadMutation,
  MutationMarkConversationReadMutationVariables
>;
export const MutationMarkNotificationReadDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationMarkNotificationRead" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "notificationId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "markNotificationRead" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "notificationId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "notificationId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "body" } },
                { kind: "Field", name: { kind: "Name", value: "isRead" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "metadataJson" },
                },
                { kind: "Field", name: { kind: "Name", value: "type" } },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationMarkNotificationReadMutation,
  MutationMarkNotificationReadMutationVariables
>;
export const MutationPublishArticleDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationPublishArticle" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "articleId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "publishArticle" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "articleId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "articleId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "authorId" } },
                { kind: "Field", name: { kind: "Name", value: "authorName" } },
                { kind: "Field", name: { kind: "Name", value: "categoryId" } },
                { kind: "Field", name: { kind: "Name", value: "content" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "category" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationPublishArticleMutation,
  MutationPublishArticleMutationVariables
>;
export const MutationPublishMarketplaceItemDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationPublishMarketplaceItem" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "itemId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "publishMarketplaceItem" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "itemId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "itemId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "archivedAt" } },
                { kind: "Field", name: { kind: "Name", value: "category" } },
                { kind: "Field", name: { kind: "Name", value: "city" } },
                { kind: "Field", name: { kind: "Name", value: "condition" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationPublishMarketplaceItemMutation,
  MutationPublishMarketplaceItemMutationVariables
>;
export const MutationPublishPropertyDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationPublishProperty" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "propertyId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "publishProperty" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "propertyId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "propertyId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "availableFrom" },
                },
                { kind: "Field", name: { kind: "Name", value: "bathrooms" } },
                { kind: "Field", name: { kind: "Name", value: "bedrooms" } },
                { kind: "Field", name: { kind: "Name", value: "builtUpArea" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "amenities" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "amenityId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "propertyId" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "buyDetail" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "developerName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "handoverDate" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "isDeveloper" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "documents" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "label" } },
                      { kind: "Field", name: { kind: "Name", value: "type" } },
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationPublishPropertyMutation,
  MutationPublishPropertyMutationVariables
>;
export const MutationPublishStaticPageDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationPublishStaticPage" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "pageId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "publishStaticPage" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pageId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "pageId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "content" } },
                { kind: "Field", name: { kind: "Name", value: "createdById" } },
                { kind: "Field", name: { kind: "Name", value: "publishedAt" } },
                { kind: "Field", name: { kind: "Name", value: "summary" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationPublishStaticPageMutation,
  MutationPublishStaticPageMutationVariables
>;
export const MutationRejectAgentApplicationDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationRejectAgentApplication" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "applicationId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "rejectionReason" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "rejectAgentApplication" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "applicationId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "applicationId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "rejectionReason" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "rejectionReason" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "applicantEmail" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "applicantName" },
                },
                { kind: "Field", name: { kind: "Name", value: "city" } },
                { kind: "Field", name: { kind: "Name", value: "experience" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "licenseNumber" },
                },
                { kind: "Field", name: { kind: "Name", value: "motivation" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationRejectAgentApplicationMutation,
  MutationRejectAgentApplicationMutationVariables
>;
export const MutationRejectPropertyForAdminDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationRejectPropertyForAdmin" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "propertyId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "rejectPropertyForAdmin" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "propertyId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "propertyId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "availableFrom" },
                },
                { kind: "Field", name: { kind: "Name", value: "bathrooms" } },
                { kind: "Field", name: { kind: "Name", value: "bedrooms" } },
                { kind: "Field", name: { kind: "Name", value: "builtUpArea" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "amenities" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "amenityId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "propertyId" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "buyDetail" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "developerName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "handoverDate" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "isDeveloper" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "documents" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "label" } },
                      { kind: "Field", name: { kind: "Name", value: "type" } },
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationRejectPropertyForAdminMutation,
  MutationRejectPropertyForAdminMutationVariables
>;
export const MutationRemoveAgencyAgentDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationRemoveAgencyAgent" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "agencyId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "agentId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "removeAgencyAgent" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "agencyId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "agencyId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "agentId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "agentId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "licenseNumber" },
                },
                { kind: "Field", name: { kind: "Name", value: "logo" } },
                { kind: "Field", name: { kind: "Name", value: "ownerId" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationRemoveAgencyAgentMutation,
  MutationRemoveAgencyAgentMutationVariables
>;
export const MutationReorderPropertyMediaDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationReorderPropertyMedia" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "PropertyMediaReorderInput" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "propertyId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "reorderPropertyMedia" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "propertyId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "propertyId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "isPrimary" } },
                { kind: "Field", name: { kind: "Name", value: "order" } },
                { kind: "Field", name: { kind: "Name", value: "type" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationReorderPropertyMediaMutation,
  MutationReorderPropertyMediaMutationVariables
>;
export const MutationRequestAgencyAdvertisingDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationRequestAgencyAdvertising" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "AgencyAdvertisingRequestInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "requestAgencyAdvertising" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "agencyName" } },
                { kind: "Field", name: { kind: "Name", value: "budget" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "contactEmail" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "contactPhone" },
                },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "rejectionReason" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationRequestAgencyAdvertisingMutation,
  MutationRequestAgencyAdvertisingMutationVariables
>;
export const MutationRequestServiceDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationRequestService" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "ServiceRequestInput" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "listingId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "requestService" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "listingId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "listingId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "listingId" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "preferredDate" },
                },
                { kind: "Field", name: { kind: "Name", value: "requesterId" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "requesterName" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "listing" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationRequestServiceMutation,
  MutationRequestServiceMutationVariables
>;
export const MutationResolveReportDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationResolveReport" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "reportId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "resolveReport" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "reportId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "reportId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "propertyId" } },
                { kind: "Field", name: { kind: "Name", value: "reason" } },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "property" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationResolveReportMutation,
  MutationResolveReportMutationVariables
>;
export const MutationSaveMarketplaceItemDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationSaveMarketplaceItem" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "itemId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "saveMarketplaceItem" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "itemId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "itemId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "itemId" } },
                { kind: "Field", name: { kind: "Name", value: "savedAt" } },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "item" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationSaveMarketplaceItemMutation,
  MutationSaveMarketplaceItemMutationVariables
>;
export const MutationSavePropertyDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationSaveProperty" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "propertyId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "saveProperty" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "propertyId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "propertyId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "propertyId" } },
                { kind: "Field", name: { kind: "Name", value: "savedAt" } },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "property" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationSavePropertyMutation,
  MutationSavePropertyMutationVariables
>;
export const MutationSavePropertyBuyDetailDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationSavePropertyBuyDetail" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "BuyDetailInput" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "propertyId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "savePropertyBuyDetail" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "propertyId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "propertyId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "developerName" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "handoverDate" },
                },
                { kind: "Field", name: { kind: "Name", value: "isDeveloper" } },
                { kind: "Field", name: { kind: "Name", value: "ownerType" } },
                { kind: "Field", name: { kind: "Name", value: "ownership" } },
                { kind: "Field", name: { kind: "Name", value: "projectName" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "paymentPlan" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationSavePropertyBuyDetailMutation,
  MutationSavePropertyBuyDetailMutationVariables
>;
export const MutationSavePropertyBuyPaymentPlanDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationSavePropertyBuyPaymentPlan" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "PaymentPlanInput" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "propertyId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "savePropertyBuyPaymentPlan" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "propertyId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "propertyId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "installments" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "amount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "dueDate" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "label" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationSavePropertyBuyPaymentPlanMutation,
  MutationSavePropertyBuyPaymentPlanMutationVariables
>;
export const MutationSavePropertyRentDetailDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationSavePropertyRentDetail" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "RentDetailInput" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "propertyId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "savePropertyRentDetail" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "propertyId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "propertyId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "cheques" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "chillerIncluded" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "depositAmount" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "maintenanceBy" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "minLeaseTerm" },
                },
                { kind: "Field", name: { kind: "Name", value: "petsAllowed" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationSavePropertyRentDetailMutation,
  MutationSavePropertyRentDetailMutationVariables
>;
export const MutationSavePropertySellDetailDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationSavePropertySellDetail" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SellDetailInput" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "propertyId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "savePropertySellDetail" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "propertyId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "propertyId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "commissionPaidBy" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "inspectionStatus" },
                },
                { kind: "Field", name: { kind: "Name", value: "isOffMarket" } },
                { kind: "Field", name: { kind: "Name", value: "propertyId" } },
                { kind: "Field", name: { kind: "Name", value: "sellerType" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "priceHistory" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "changedAt" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "price" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "propertyId" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationSavePropertySellDetailMutation,
  MutationSavePropertySellDetailMutationVariables
>;
export const MutationSaveRoommateProfileDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationSaveRoommateProfile" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "profileId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "saveRoommateProfile" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "profileId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "profileId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "profileId" } },
                { kind: "Field", name: { kind: "Name", value: "savedAt" } },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "profile" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationSaveRoommateProfileMutation,
  MutationSaveRoommateProfileMutationVariables
>;
export const MutationScheduleViewingDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationScheduleViewing" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "ScheduleViewingInput" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "inquiryId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "scheduleViewing" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "inquiryId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "inquiryId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "inquiryId" } },
                { kind: "Field", name: { kind: "Name", value: "propertyId" } },
                { kind: "Field", name: { kind: "Name", value: "scheduledAt" } },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "property" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationScheduleViewingMutation,
  MutationScheduleViewingMutationVariables
>;
export const MutationSendMessageDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationSendMessage" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "conversationId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SendMessageInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "sendMessage" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "conversationId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "conversationId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "body" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "conversationId" },
                },
                { kind: "Field", name: { kind: "Name", value: "senderId" } },
                { kind: "Field", name: { kind: "Name", value: "type" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationSendMessageMutation,
  MutationSendMessageMutationVariables
>;
export const MutationSetPrimaryPropertyMediaDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationSetPrimaryPropertyMedia" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "mediaId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "propertyId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "setPrimaryPropertyMedia" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "mediaId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "mediaId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "propertyId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "propertyId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "isPrimary" } },
                { kind: "Field", name: { kind: "Name", value: "order" } },
                { kind: "Field", name: { kind: "Name", value: "type" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationSetPrimaryPropertyMediaMutation,
  MutationSetPrimaryPropertyMediaMutationVariables
>;
export const MutationSubmitContactMessageDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationSubmitContactMessage" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "ContactMessageInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "submitContactMessage" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                { kind: "Field", name: { kind: "Name", value: "phone" } },
                { kind: "Field", name: { kind: "Name", value: "subject" } },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationSubmitContactMessageMutation,
  MutationSubmitContactMessageMutationVariables
>;
export const MutationSubmitJobApplicationDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationSubmitJobApplication" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "careerPostId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "JobApplicationInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "submitJobApplication" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "careerPostId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "careerPostId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "careerPostId" },
                },
                { kind: "Field", name: { kind: "Name", value: "coverLetter" } },
                { kind: "Field", name: { kind: "Name", value: "fullName" } },
                { kind: "Field", name: { kind: "Name", value: "phone" } },
                { kind: "Field", name: { kind: "Name", value: "resumeUrl" } },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationSubmitJobApplicationMutation,
  MutationSubmitJobApplicationMutationVariables
>;
export const MutationSubscribeToPlanDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationSubscribeToPlan" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SubscribeToPlanInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "subscribeToPlan" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "agentId" } },
                { kind: "Field", name: { kind: "Name", value: "expiresAt" } },
                { kind: "Field", name: { kind: "Name", value: "isActive" } },
                { kind: "Field", name: { kind: "Name", value: "planId" } },
                { kind: "Field", name: { kind: "Name", value: "startsAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "plan" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationSubscribeToPlanMutation,
  MutationSubscribeToPlanMutationVariables
>;
export const MutationToggleSavedSearchAlertDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationToggleSavedSearchAlert" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "savedSearchId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "toggleSavedSearchAlert" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "savedSearchId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "savedSearchId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "alertEnabled" },
                },
                { kind: "Field", name: { kind: "Name", value: "filtersJson" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "lastNotifiedAt" },
                },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationToggleSavedSearchAlertMutation,
  MutationToggleSavedSearchAlertMutationVariables
>;
export const MutationTrackPropertyViewDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationTrackPropertyView" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "propertyId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "trackPropertyView" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "propertyId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "propertyId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "availableFrom" },
                },
                { kind: "Field", name: { kind: "Name", value: "bathrooms" } },
                { kind: "Field", name: { kind: "Name", value: "bedrooms" } },
                { kind: "Field", name: { kind: "Name", value: "builtUpArea" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "amenities" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "amenityId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "propertyId" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "buyDetail" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "developerName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "handoverDate" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "isDeveloper" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "documents" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "label" } },
                      { kind: "Field", name: { kind: "Name", value: "type" } },
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationTrackPropertyViewMutation,
  MutationTrackPropertyViewMutationVariables
>;
export const MutationUnsaveMarketplaceItemDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationUnsaveMarketplaceItem" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "itemId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "unsaveMarketplaceItem" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "itemId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "itemId" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationUnsaveMarketplaceItemMutation,
  MutationUnsaveMarketplaceItemMutationVariables
>;
export const MutationUnsavePropertyDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationUnsaveProperty" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "propertyId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "unsaveProperty" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "propertyId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "propertyId" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationUnsavePropertyMutation,
  MutationUnsavePropertyMutationVariables
>;
export const MutationUnsaveRoommateProfileDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationUnsaveRoommateProfile" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "profileId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "unsaveRoommateProfile" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "profileId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "profileId" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationUnsaveRoommateProfileMutation,
  MutationUnsaveRoommateProfileMutationVariables
>;
export const MutationUpdateAdminDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationUpdateAdmin" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "AdminUpdateInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateAdmin" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                      { kind: "Field", name: { kind: "Name", value: "role" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationUpdateAdminMutation,
  MutationUpdateAdminMutationVariables
>;
export const MutationUpdateAgencyDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationUpdateAgency" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "agencyId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "AgencyUpdateInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateAgency" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "agencyId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "agencyId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "licenseNumber" },
                },
                { kind: "Field", name: { kind: "Name", value: "logo" } },
                { kind: "Field", name: { kind: "Name", value: "ownerId" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationUpdateAgencyMutation,
  MutationUpdateAgencyMutationVariables
>;
export const MutationUpdateAgencyAdvertisingRequestStatusDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: {
        kind: "Name",
        value: "MutationUpdateAgencyAdvertisingRequestStatus",
      },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AgencyAdvertisingRequestStatusInput",
              },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "requestId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: {
              kind: "Name",
              value: "updateAgencyAdvertisingRequestStatus",
            },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "requestId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "requestId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "agencyName" } },
                { kind: "Field", name: { kind: "Name", value: "budget" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "contactEmail" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "contactPhone" },
                },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "rejectionReason" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationUpdateAgencyAdvertisingRequestStatusMutation,
  MutationUpdateAgencyAdvertisingRequestStatusMutationVariables
>;
export const MutationUpdateAmenityDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationUpdateAmenity" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "amenityId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "AmenityUpdateInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateAmenity" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "amenityId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "amenityId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "category" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationUpdateAmenityMutation,
  MutationUpdateAmenityMutationVariables
>;
export const MutationUpdateArticleDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationUpdateArticle" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "articleId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "ArticleUpdateInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateArticle" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "articleId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "articleId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "authorId" } },
                { kind: "Field", name: { kind: "Name", value: "authorName" } },
                { kind: "Field", name: { kind: "Name", value: "categoryId" } },
                { kind: "Field", name: { kind: "Name", value: "content" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "category" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationUpdateArticleMutation,
  MutationUpdateArticleMutationVariables
>;
export const MutationUpdateAttorneyProfileDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationUpdateAttorneyProfile" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "attorneyId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "AttorneyProfileUpdateInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateAttorneyProfile" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "attorneyId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "attorneyId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "city" } },
                { kind: "Field", name: { kind: "Name", value: "createdById" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationUpdateAttorneyProfileMutation,
  MutationUpdateAttorneyProfileMutationVariables
>;
export const MutationUpdateCareerPostDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationUpdateCareerPost" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "careerPostId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "CareerPostUpdateInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateCareerPost" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "careerPostId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "careerPostId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "createdById" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "employmentType" },
                },
                { kind: "Field", name: { kind: "Name", value: "location" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationUpdateCareerPostMutation,
  MutationUpdateCareerPostMutationVariables
>;
export const MutationUpdateInquiryStatusDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationUpdateInquiryStatus" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "InquiryStatusUpdateInput" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "inquiryId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateInquiryStatus" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "inquiryId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "inquiryId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                { kind: "Field", name: { kind: "Name", value: "phone" } },
                { kind: "Field", name: { kind: "Name", value: "propertyId" } },
                { kind: "Field", name: { kind: "Name", value: "source" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "property" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationUpdateInquiryStatusMutation,
  MutationUpdateInquiryStatusMutationVariables
>;
export const MutationUpdateMarketplaceItemDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationUpdateMarketplaceItem" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "MarketplaceItemUpdateInput" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "itemId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateMarketplaceItem" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "itemId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "itemId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "archivedAt" } },
                { kind: "Field", name: { kind: "Name", value: "category" } },
                { kind: "Field", name: { kind: "Name", value: "city" } },
                { kind: "Field", name: { kind: "Name", value: "condition" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationUpdateMarketplaceItemMutation,
  MutationUpdateMarketplaceItemMutationVariables
>;
export const MutationUpdatePropertyDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationUpdateProperty" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "PropertyUpdateInput" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "propertyId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateProperty" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "propertyId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "propertyId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "availableFrom" },
                },
                { kind: "Field", name: { kind: "Name", value: "bathrooms" } },
                { kind: "Field", name: { kind: "Name", value: "bedrooms" } },
                { kind: "Field", name: { kind: "Name", value: "builtUpArea" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "amenities" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "amenityId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "propertyId" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "buyDetail" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "developerName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "handoverDate" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "isDeveloper" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "documents" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "label" } },
                      { kind: "Field", name: { kind: "Name", value: "type" } },
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationUpdatePropertyMutation,
  MutationUpdatePropertyMutationVariables
>;
export const MutationUpdateRenterDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationUpdateRenter" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "RenterUpdateInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateRenter" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                      { kind: "Field", name: { kind: "Name", value: "role" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationUpdateRenterMutation,
  MutationUpdateRenterMutationVariables
>;
export const MutationUpdateServiceListingDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationUpdateServiceListing" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "ServiceListingUpdateInput" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "listingId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateServiceListing" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "listingId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "listingId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "category" } },
                { kind: "Field", name: { kind: "Name", value: "city" } },
                { kind: "Field", name: { kind: "Name", value: "currency" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "provider" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationUpdateServiceListingMutation,
  MutationUpdateServiceListingMutationVariables
>;
export const MutationUpdateServiceProviderDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationUpdateServiceProvider" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "ServiceProviderUpdateInput" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "providerId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateServiceProvider" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "providerId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "providerId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "businessName" },
                },
                { kind: "Field", name: { kind: "Name", value: "city" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "isVerified" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationUpdateServiceProviderMutation,
  MutationUpdateServiceProviderMutationVariables
>;
export const MutationUpdateServiceRequestStatusDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationUpdateServiceRequestStatus" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "ServiceRequestStatusInput" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "requestId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateServiceRequestStatus" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "requestId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "requestId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "listingId" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "preferredDate" },
                },
                { kind: "Field", name: { kind: "Name", value: "requesterId" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "requesterName" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "listing" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationUpdateServiceRequestStatusMutation,
  MutationUpdateServiceRequestStatusMutationVariables
>;
export const MutationUpdateStaticPageDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationUpdateStaticPage" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "StaticPageUpdateInput" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "pageId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateStaticPage" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "pageId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "pageId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "content" } },
                { kind: "Field", name: { kind: "Name", value: "createdById" } },
                { kind: "Field", name: { kind: "Name", value: "publishedAt" } },
                { kind: "Field", name: { kind: "Name", value: "summary" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationUpdateStaticPageMutation,
  MutationUpdateStaticPageMutationVariables
>;
export const MutationUpdateSubscriptionPlanDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationUpdateSubscriptionPlan" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SubscriptionPlanUpdateInput" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "planId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateSubscriptionPlan" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "planId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "planId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "boostCredits" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "durationDays" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "featuresJson" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "listingLimit" },
                },
                { kind: "Field", name: { kind: "Name", value: "price" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationUpdateSubscriptionPlanMutation,
  MutationUpdateSubscriptionPlanMutationVariables
>;
export const MutationUpdateUserDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationUpdateUser" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "UserUpdateInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateUser" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "role" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "emailVerified" },
                },
                { kind: "Field", name: { kind: "Name", value: "image" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "admin" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "userId" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "renter" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "userId" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationUpdateUserMutation,
  MutationUpdateUserMutationVariables
>;
export const MutationUpsertBuyDetailDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationUpsertBuyDetail" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "BuyDetailInput" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "propertyId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "upsertBuyDetail" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "propertyId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "propertyId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "developerName" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "handoverDate" },
                },
                { kind: "Field", name: { kind: "Name", value: "isDeveloper" } },
                { kind: "Field", name: { kind: "Name", value: "ownerType" } },
                { kind: "Field", name: { kind: "Name", value: "ownership" } },
                { kind: "Field", name: { kind: "Name", value: "projectName" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "paymentPlan" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationUpsertBuyDetailMutation,
  MutationUpsertBuyDetailMutationVariables
>;
export const MutationUpsertPropertyPaymentPlanDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationUpsertPropertyPaymentPlan" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "PaymentPlanInput" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "propertyId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "upsertPropertyPaymentPlan" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "propertyId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "propertyId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "installments" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "amount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "dueDate" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "label" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationUpsertPropertyPaymentPlanMutation,
  MutationUpsertPropertyPaymentPlanMutationVariables
>;
export const MutationUpsertRentDetailDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationUpsertRentDetail" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "RentDetailInput" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "propertyId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "upsertRentDetail" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "propertyId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "propertyId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "cheques" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "chillerIncluded" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "depositAmount" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "maintenanceBy" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "minLeaseTerm" },
                },
                { kind: "Field", name: { kind: "Name", value: "petsAllowed" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationUpsertRentDetailMutation,
  MutationUpsertRentDetailMutationVariables
>;
export const MutationUpsertRoommateProfileDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationUpsertRoommateProfile" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "RoommateProfileInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "upsertRoommateProfile" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "age" } },
                { kind: "Field", name: { kind: "Name", value: "area" } },
                { kind: "Field", name: { kind: "Name", value: "bio" } },
                { kind: "Field", name: { kind: "Name", value: "budgetMax" } },
                { kind: "Field", name: { kind: "Name", value: "budgetMin" } },
                { kind: "Field", name: { kind: "Name", value: "city" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationUpsertRoommateProfileMutation,
  MutationUpsertRoommateProfileMutationVariables
>;
export const MutationUpsertSellDetailDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MutationUpsertSellDetail" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SellDetailInput" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "propertyId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "upsertSellDetail" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "propertyId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "propertyId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "commissionPaidBy" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "inspectionStatus" },
                },
                { kind: "Field", name: { kind: "Name", value: "isOffMarket" } },
                { kind: "Field", name: { kind: "Name", value: "propertyId" } },
                { kind: "Field", name: { kind: "Name", value: "sellerType" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "priceHistory" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "changedAt" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "price" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "propertyId" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MutationUpsertSellDetailMutation,
  MutationUpsertSellDetailMutationVariables
>;
export const MeDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Me" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "me" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "UserProfile" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "UserProfile" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "User" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "email" } },
          { kind: "Field", name: { kind: "Name", value: "emailVerified" } },
          { kind: "Field", name: { kind: "Name", value: "role" } },
          { kind: "Field", name: { kind: "Name", value: "image" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
