<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep LuxeMart as a frontend-only TanStack Start storefront using file routes; this preserves the template's routing and SSR while meeting the requested shopping navigation.
- Keep catalog data in `src/data/products.ts` and browser-only demo shopping state in `ShopContext`; no backend or real payment service is connected.
- Use Bootstrap 5's responsive grid CSS alongside the semantic token system in `src/styles.css`; this demonstrates Bootstrap without reverting to a generic template.
