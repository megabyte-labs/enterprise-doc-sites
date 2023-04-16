/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { BlogData } from "src/data.server/blog";
import { SiteHeader } from "./components/capacitor-site-header/capacitor-site-header";
import { DocsTemplate } from "src/data.server/models";
export { BlogData } from "src/data.server/blog";
export { SiteHeader } from "./components/capacitor-site-header/capacitor-site-header";
export { DocsTemplate } from "src/data.server/models";
export namespace Components {
    interface AppMenuToggle {
        "icon": string;
    }
    interface BlogPage {
        "data": BlogData[];
        "defaults": typeof defaults;
    }
    interface BlogPagination {
        "defaults": typeof defaults;
        "linkText": [string, string];
        "rssIcon": boolean;
    }
    interface BlogPost {
        "data": BlogData;
        "defaults": typeof defaults;
        "preview"?: boolean;
    }
    interface BlogSocialActions {
        "column": boolean;
        "defaults": typeof defaults;
        "post"?: BlogData;
    }
    interface BlogSubnav {
        "breadcrumbs": [string, string][];
        "pagination": boolean;
        "socialActions": boolean;
    }
    interface CapacitorHubspotForm {
        "ajax": boolean;
        "defaults": typeof defaults;
        "formId"?: string;
        "goToWebinarKey"?: string;
    }
    interface CapacitorSite {
    }
    interface CapacitorSiteFooter {
        "defaults": typeof defaults;
    }
    interface CodeSnippet {
        "code": string;
        "language": string;
    }
    interface CodeTabs {
        "data": {
    tabs: string[];
    languages: string[];
    code: string[];
  };
    }
    interface CommunityPage {
        "data": typeof CommunityPageData;
    }
    interface DocsSearch {
        "defaults": typeof defaults;
        "placeholder": string;
        "theme": SiteHeader['theme'];
    }
    interface EnterprisePage {
        "data": typeof EnterprisePageData;
    }
    interface EnterpriseSubnav {
    }
    interface LandingPage {
        "data": typeof LandingPageData;
        "template": any;
    }
    interface MetaTags {
        "authorTwitter"?: any;
        "canonicalUrl"?: any;
        "defaults": typeof defaults;
        "description"?: any;
        "image"?: any;
        "ogType"?: any;
        "pageTitle"?: any;
        "rssTitle"?: any;
    }
    interface MoreButton {
    }
    interface NewsletterSignup {
        "defaults": typeof defaults;
    }
    interface NewsletterSignupParallax {
        "defaults": typeof defaults;
    }
    interface NotFoundPage {
        "defaults": typeof defaults;
    }
    interface PreFooter {
        "defaults": typeof defaults;
    }
    interface PrismicImage {
        "alt": string;
        "class": string;
        "defaults": typeof defaults;
        "height": number | string;
        "image": any;
        "loading": 'eager' | 'lazy';
        "params": any;
        "width": number | string;
    }
    interface PrivacyPolicyPage {
        "defaults": typeof defaults;
    }
    interface SiteHeader {
        "defaults": typeof defaults;
        "includeBurger": boolean;
        "includeLogo": boolean;
        "sticky": boolean;
        "template": DocsTemplate;
        "theme": 'light' | 'dark';
    }
    interface SolutionPage {
        "defaults": typeof defaults;
        "solutionId": string;
    }
    interface TermsServicePage {
        "defaults": typeof defaults;
    }
    interface TopParallax {
        "defaults": typeof defaults;
    }
    interface WebpImage {
        "alt": string;
        "class": string;
        "height": string | number;
        "loading": "lazy" | "auto" | "eager";
        "src": string;
        "srcset": string;
        "width": string | number;
    }
}
export interface AppMenuToggleCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLAppMenuToggleElement;
}
export interface CapacitorHubspotFormCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCapacitorHubspotFormElement;
}
declare global {
    interface HTMLAppMenuToggleElement extends Components.AppMenuToggle, HTMLStencilElement {
    }
    var HTMLAppMenuToggleElement: {
        prototype: HTMLAppMenuToggleElement;
        new (): HTMLAppMenuToggleElement;
    };
    interface HTMLBlogPageElement extends Components.BlogPage, HTMLStencilElement {
    }
    var HTMLBlogPageElement: {
        prototype: HTMLBlogPageElement;
        new (): HTMLBlogPageElement;
    };
    interface HTMLBlogPaginationElement extends Components.BlogPagination, HTMLStencilElement {
    }
    var HTMLBlogPaginationElement: {
        prototype: HTMLBlogPaginationElement;
        new (): HTMLBlogPaginationElement;
    };
    interface HTMLBlogPostElement extends Components.BlogPost, HTMLStencilElement {
    }
    var HTMLBlogPostElement: {
        prototype: HTMLBlogPostElement;
        new (): HTMLBlogPostElement;
    };
    interface HTMLBlogSocialActionsElement extends Components.BlogSocialActions, HTMLStencilElement {
    }
    var HTMLBlogSocialActionsElement: {
        prototype: HTMLBlogSocialActionsElement;
        new (): HTMLBlogSocialActionsElement;
    };
    interface HTMLBlogSubnavElement extends Components.BlogSubnav, HTMLStencilElement {
    }
    var HTMLBlogSubnavElement: {
        prototype: HTMLBlogSubnavElement;
        new (): HTMLBlogSubnavElement;
    };
    interface HTMLCapacitorHubspotFormElement extends Components.CapacitorHubspotForm, HTMLStencilElement {
    }
    var HTMLCapacitorHubspotFormElement: {
        prototype: HTMLCapacitorHubspotFormElement;
        new (): HTMLCapacitorHubspotFormElement;
    };
    interface HTMLCapacitorSiteElement extends Components.CapacitorSite, HTMLStencilElement {
    }
    var HTMLCapacitorSiteElement: {
        prototype: HTMLCapacitorSiteElement;
        new (): HTMLCapacitorSiteElement;
    };
    interface HTMLCapacitorSiteFooterElement extends Components.CapacitorSiteFooter, HTMLStencilElement {
    }
    var HTMLCapacitorSiteFooterElement: {
        prototype: HTMLCapacitorSiteFooterElement;
        new (): HTMLCapacitorSiteFooterElement;
    };
    interface HTMLCodeSnippetElement extends Components.CodeSnippet, HTMLStencilElement {
    }
    var HTMLCodeSnippetElement: {
        prototype: HTMLCodeSnippetElement;
        new (): HTMLCodeSnippetElement;
    };
    interface HTMLCodeTabsElement extends Components.CodeTabs, HTMLStencilElement {
    }
    var HTMLCodeTabsElement: {
        prototype: HTMLCodeTabsElement;
        new (): HTMLCodeTabsElement;
    };
    interface HTMLCommunityPageElement extends Components.CommunityPage, HTMLStencilElement {
    }
    var HTMLCommunityPageElement: {
        prototype: HTMLCommunityPageElement;
        new (): HTMLCommunityPageElement;
    };
    interface HTMLDocsSearchElement extends Components.DocsSearch, HTMLStencilElement {
    }
    var HTMLDocsSearchElement: {
        prototype: HTMLDocsSearchElement;
        new (): HTMLDocsSearchElement;
    };
    interface HTMLEnterprisePageElement extends Components.EnterprisePage, HTMLStencilElement {
    }
    var HTMLEnterprisePageElement: {
        prototype: HTMLEnterprisePageElement;
        new (): HTMLEnterprisePageElement;
    };
    interface HTMLEnterpriseSubnavElement extends Components.EnterpriseSubnav, HTMLStencilElement {
    }
    var HTMLEnterpriseSubnavElement: {
        prototype: HTMLEnterpriseSubnavElement;
        new (): HTMLEnterpriseSubnavElement;
    };
    interface HTMLLandingPageElement extends Components.LandingPage, HTMLStencilElement {
    }
    var HTMLLandingPageElement: {
        prototype: HTMLLandingPageElement;
        new (): HTMLLandingPageElement;
    };
    interface HTMLMetaTagsElement extends Components.MetaTags, HTMLStencilElement {
    }
    var HTMLMetaTagsElement: {
        prototype: HTMLMetaTagsElement;
        new (): HTMLMetaTagsElement;
    };
    interface HTMLMoreButtonElement extends Components.MoreButton, HTMLStencilElement {
    }
    var HTMLMoreButtonElement: {
        prototype: HTMLMoreButtonElement;
        new (): HTMLMoreButtonElement;
    };
    interface HTMLNewsletterSignupElement extends Components.NewsletterSignup, HTMLStencilElement {
    }
    var HTMLNewsletterSignupElement: {
        prototype: HTMLNewsletterSignupElement;
        new (): HTMLNewsletterSignupElement;
    };
    interface HTMLNewsletterSignupParallaxElement extends Components.NewsletterSignupParallax, HTMLStencilElement {
    }
    var HTMLNewsletterSignupParallaxElement: {
        prototype: HTMLNewsletterSignupParallaxElement;
        new (): HTMLNewsletterSignupParallaxElement;
    };
    interface HTMLNotFoundPageElement extends Components.NotFoundPage, HTMLStencilElement {
    }
    var HTMLNotFoundPageElement: {
        prototype: HTMLNotFoundPageElement;
        new (): HTMLNotFoundPageElement;
    };
    interface HTMLPreFooterElement extends Components.PreFooter, HTMLStencilElement {
    }
    var HTMLPreFooterElement: {
        prototype: HTMLPreFooterElement;
        new (): HTMLPreFooterElement;
    };
    interface HTMLPrismicImageElement extends Components.PrismicImage, HTMLStencilElement {
    }
    var HTMLPrismicImageElement: {
        prototype: HTMLPrismicImageElement;
        new (): HTMLPrismicImageElement;
    };
    interface HTMLPrivacyPolicyPageElement extends Components.PrivacyPolicyPage, HTMLStencilElement {
    }
    var HTMLPrivacyPolicyPageElement: {
        prototype: HTMLPrivacyPolicyPageElement;
        new (): HTMLPrivacyPolicyPageElement;
    };
    interface HTMLSiteHeaderElement extends Components.SiteHeader, HTMLStencilElement {
    }
    var HTMLSiteHeaderElement: {
        prototype: HTMLSiteHeaderElement;
        new (): HTMLSiteHeaderElement;
    };
    interface HTMLSolutionPageElement extends Components.SolutionPage, HTMLStencilElement {
    }
    var HTMLSolutionPageElement: {
        prototype: HTMLSolutionPageElement;
        new (): HTMLSolutionPageElement;
    };
    interface HTMLTermsServicePageElement extends Components.TermsServicePage, HTMLStencilElement {
    }
    var HTMLTermsServicePageElement: {
        prototype: HTMLTermsServicePageElement;
        new (): HTMLTermsServicePageElement;
    };
    interface HTMLTopParallaxElement extends Components.TopParallax, HTMLStencilElement {
    }
    var HTMLTopParallaxElement: {
        prototype: HTMLTopParallaxElement;
        new (): HTMLTopParallaxElement;
    };
    interface HTMLWebpImageElement extends Components.WebpImage, HTMLStencilElement {
    }
    var HTMLWebpImageElement: {
        prototype: HTMLWebpImageElement;
        new (): HTMLWebpImageElement;
    };
    interface HTMLElementTagNameMap {
        "app-menu-toggle": HTMLAppMenuToggleElement;
        "blog-page": HTMLBlogPageElement;
        "blog-pagination": HTMLBlogPaginationElement;
        "blog-post": HTMLBlogPostElement;
        "blog-social-actions": HTMLBlogSocialActionsElement;
        "blog-subnav": HTMLBlogSubnavElement;
        "capacitor-hubspot-form": HTMLCapacitorHubspotFormElement;
        "capacitor-site": HTMLCapacitorSiteElement;
        "capacitor-site-footer": HTMLCapacitorSiteFooterElement;
        "code-snippet": HTMLCodeSnippetElement;
        "code-tabs": HTMLCodeTabsElement;
        "community-page": HTMLCommunityPageElement;
        "docs-search": HTMLDocsSearchElement;
        "enterprise-page": HTMLEnterprisePageElement;
        "enterprise-subnav": HTMLEnterpriseSubnavElement;
        "landing-page": HTMLLandingPageElement;
        "meta-tags": HTMLMetaTagsElement;
        "more-button": HTMLMoreButtonElement;
        "newsletter-signup": HTMLNewsletterSignupElement;
        "newsletter-signup-parallax": HTMLNewsletterSignupParallaxElement;
        "not-found-page": HTMLNotFoundPageElement;
        "pre-footer": HTMLPreFooterElement;
        "prismic-image": HTMLPrismicImageElement;
        "privacy-policy-page": HTMLPrivacyPolicyPageElement;
        "site-header": HTMLSiteHeaderElement;
        "solution-page": HTMLSolutionPageElement;
        "terms-service-page": HTMLTermsServicePageElement;
        "top-parallax": HTMLTopParallaxElement;
        "webp-image": HTMLWebpImageElement;
    }
}
declare namespace LocalJSX {
    interface AppMenuToggle {
        "icon"?: string;
        "onMenuToggleClick"?: (event: AppMenuToggleCustomEvent<any>) => void;
    }
    interface BlogPage {
        "data"?: BlogData[];
        "defaults"?: typeof defaults;
    }
    interface BlogPagination {
        "defaults"?: typeof defaults;
        "linkText"?: [string, string];
        "rssIcon"?: boolean;
    }
    interface BlogPost {
        "data"?: BlogData;
        "defaults"?: typeof defaults;
        "preview"?: boolean;
    }
    interface BlogSocialActions {
        "column"?: boolean;
        "defaults"?: typeof defaults;
        "post"?: BlogData;
    }
    interface BlogSubnav {
        "breadcrumbs"?: [string, string][];
        "pagination"?: boolean;
        "socialActions"?: boolean;
    }
    interface CapacitorHubspotForm {
        "ajax"?: boolean;
        "defaults"?: typeof defaults;
        "formId"?: string;
        "goToWebinarKey"?: string;
        "onFormSubmitted"?: (event: CapacitorHubspotFormCustomEvent<any>) => void;
    }
    interface CapacitorSite {
    }
    interface CapacitorSiteFooter {
        "defaults"?: typeof defaults;
    }
    interface CodeSnippet {
        "code": string;
        "language"?: string;
    }
    interface CodeTabs {
        "data"?: {
    tabs: string[];
    languages: string[];
    code: string[];
  };
    }
    interface CommunityPage {
        "data"?: typeof CommunityPageData;
    }
    interface DocsSearch {
        "defaults"?: typeof defaults;
        "placeholder"?: string;
        "theme"?: SiteHeader['theme'];
    }
    interface EnterprisePage {
        "data"?: typeof EnterprisePageData;
    }
    interface EnterpriseSubnav {
    }
    interface LandingPage {
        "data"?: typeof LandingPageData;
        "template"?: any;
    }
    interface MetaTags {
        "authorTwitter"?: any;
        "canonicalUrl"?: any;
        "defaults"?: typeof defaults;
        "description"?: any;
        "image"?: any;
        "ogType"?: any;
        "pageTitle"?: any;
        "rssTitle"?: any;
    }
    interface MoreButton {
    }
    interface NewsletterSignup {
        "defaults"?: typeof defaults;
    }
    interface NewsletterSignupParallax {
        "defaults"?: typeof defaults;
    }
    interface NotFoundPage {
        "defaults"?: typeof defaults;
    }
    interface PreFooter {
        "defaults"?: typeof defaults;
    }
    interface PrismicImage {
        "alt"?: string;
        "class"?: string;
        "defaults"?: typeof defaults;
        "height"?: number | string;
        "image"?: any;
        "loading"?: 'eager' | 'lazy';
        "params"?: any;
        "width"?: number | string;
    }
    interface PrivacyPolicyPage {
        "defaults"?: typeof defaults;
    }
    interface SiteHeader {
        "defaults"?: typeof defaults;
        "includeBurger"?: boolean;
        "includeLogo"?: boolean;
        "sticky"?: boolean;
        "template"?: DocsTemplate;
        "theme"?: 'light' | 'dark';
    }
    interface SolutionPage {
        "defaults"?: typeof defaults;
        "solutionId"?: string;
    }
    interface TermsServicePage {
        "defaults"?: typeof defaults;
    }
    interface TopParallax {
        "defaults"?: typeof defaults;
    }
    interface WebpImage {
        "alt"?: string;
        "class"?: string;
        "height"?: string | number;
        "loading"?: "lazy" | "auto" | "eager";
        "src"?: string;
        "srcset"?: string;
        "width"?: string | number;
    }
    interface IntrinsicElements {
        "app-menu-toggle": AppMenuToggle;
        "blog-page": BlogPage;
        "blog-pagination": BlogPagination;
        "blog-post": BlogPost;
        "blog-social-actions": BlogSocialActions;
        "blog-subnav": BlogSubnav;
        "capacitor-hubspot-form": CapacitorHubspotForm;
        "capacitor-site": CapacitorSite;
        "capacitor-site-footer": CapacitorSiteFooter;
        "code-snippet": CodeSnippet;
        "code-tabs": CodeTabs;
        "community-page": CommunityPage;
        "docs-search": DocsSearch;
        "enterprise-page": EnterprisePage;
        "enterprise-subnav": EnterpriseSubnav;
        "landing-page": LandingPage;
        "meta-tags": MetaTags;
        "more-button": MoreButton;
        "newsletter-signup": NewsletterSignup;
        "newsletter-signup-parallax": NewsletterSignupParallax;
        "not-found-page": NotFoundPage;
        "pre-footer": PreFooter;
        "prismic-image": PrismicImage;
        "privacy-policy-page": PrivacyPolicyPage;
        "site-header": SiteHeader;
        "solution-page": SolutionPage;
        "terms-service-page": TermsServicePage;
        "top-parallax": TopParallax;
        "webp-image": WebpImage;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-menu-toggle": LocalJSX.AppMenuToggle & JSXBase.HTMLAttributes<HTMLAppMenuToggleElement>;
            "blog-page": LocalJSX.BlogPage & JSXBase.HTMLAttributes<HTMLBlogPageElement>;
            "blog-pagination": LocalJSX.BlogPagination & JSXBase.HTMLAttributes<HTMLBlogPaginationElement>;
            "blog-post": LocalJSX.BlogPost & JSXBase.HTMLAttributes<HTMLBlogPostElement>;
            "blog-social-actions": LocalJSX.BlogSocialActions & JSXBase.HTMLAttributes<HTMLBlogSocialActionsElement>;
            "blog-subnav": LocalJSX.BlogSubnav & JSXBase.HTMLAttributes<HTMLBlogSubnavElement>;
            "capacitor-hubspot-form": LocalJSX.CapacitorHubspotForm & JSXBase.HTMLAttributes<HTMLCapacitorHubspotFormElement>;
            "capacitor-site": LocalJSX.CapacitorSite & JSXBase.HTMLAttributes<HTMLCapacitorSiteElement>;
            "capacitor-site-footer": LocalJSX.CapacitorSiteFooter & JSXBase.HTMLAttributes<HTMLCapacitorSiteFooterElement>;
            "code-snippet": LocalJSX.CodeSnippet & JSXBase.HTMLAttributes<HTMLCodeSnippetElement>;
            "code-tabs": LocalJSX.CodeTabs & JSXBase.HTMLAttributes<HTMLCodeTabsElement>;
            "community-page": LocalJSX.CommunityPage & JSXBase.HTMLAttributes<HTMLCommunityPageElement>;
            "docs-search": LocalJSX.DocsSearch & JSXBase.HTMLAttributes<HTMLDocsSearchElement>;
            "enterprise-page": LocalJSX.EnterprisePage & JSXBase.HTMLAttributes<HTMLEnterprisePageElement>;
            "enterprise-subnav": LocalJSX.EnterpriseSubnav & JSXBase.HTMLAttributes<HTMLEnterpriseSubnavElement>;
            "landing-page": LocalJSX.LandingPage & JSXBase.HTMLAttributes<HTMLLandingPageElement>;
            "meta-tags": LocalJSX.MetaTags & JSXBase.HTMLAttributes<HTMLMetaTagsElement>;
            "more-button": LocalJSX.MoreButton & JSXBase.HTMLAttributes<HTMLMoreButtonElement>;
            "newsletter-signup": LocalJSX.NewsletterSignup & JSXBase.HTMLAttributes<HTMLNewsletterSignupElement>;
            "newsletter-signup-parallax": LocalJSX.NewsletterSignupParallax & JSXBase.HTMLAttributes<HTMLNewsletterSignupParallaxElement>;
            "not-found-page": LocalJSX.NotFoundPage & JSXBase.HTMLAttributes<HTMLNotFoundPageElement>;
            "pre-footer": LocalJSX.PreFooter & JSXBase.HTMLAttributes<HTMLPreFooterElement>;
            "prismic-image": LocalJSX.PrismicImage & JSXBase.HTMLAttributes<HTMLPrismicImageElement>;
            "privacy-policy-page": LocalJSX.PrivacyPolicyPage & JSXBase.HTMLAttributes<HTMLPrivacyPolicyPageElement>;
            "site-header": LocalJSX.SiteHeader & JSXBase.HTMLAttributes<HTMLSiteHeaderElement>;
            "solution-page": LocalJSX.SolutionPage & JSXBase.HTMLAttributes<HTMLSolutionPageElement>;
            "terms-service-page": LocalJSX.TermsServicePage & JSXBase.HTMLAttributes<HTMLTermsServicePageElement>;
            "top-parallax": LocalJSX.TopParallax & JSXBase.HTMLAttributes<HTMLTopParallaxElement>;
            "webp-image": LocalJSX.WebpImage & JSXBase.HTMLAttributes<HTMLWebpImageElement>;
        }
    }
}
