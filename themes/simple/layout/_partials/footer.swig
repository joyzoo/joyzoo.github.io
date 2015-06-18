<div class="copyright">
  {% set current = date(Date.now(), "YYYY") %}
  &copy; &nbsp; {% if theme.since and theme.since != current %} {{ theme.since }} - {% endif %}
  {{ current }}
  <span class="with-love">
    <i class="icon-heart"></i>
  </span>
  <span class="author">{{ config.author }}</span>
</div>

{% block footer %}{% endblock %}
